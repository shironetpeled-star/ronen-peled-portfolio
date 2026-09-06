const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 8;
const visits = new Map();

function allowedOrigin(req) {
  const value = req.headers.origin || req.headers.referer || '';
  if (!value) return false;
  try {
    const host = new URL(value).hostname.toLowerCase();
    return host === 'ronenpeled.com' || host === 'www.ronenpeled.com' || host.endsWith('.vercel.app');
  } catch {
    return false;
  }
}

function withinLimit(req) {
  const forwarded = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const ip = forwarded || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const recent = (visits.get(ip) || []).filter(time => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return false;
  recent.push(now);
  visits.set(ip, recent);
  return true;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!allowedOrigin(req)) return res.status(403).json({ error: 'Forbidden' });
  if (!withinLimit(req)) return res.status(429).json({ error: 'Too many requests' });

  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) return res.status(503).json({ error: 'Voice service is not configured' });

  const text = typeof req.body?.text === 'string' ? req.body.text.replace(/\s+/g, ' ').trim() : '';
  const language = req.body?.language === 'en' ? 'en' : 'he';
  if (!text || text.length > 4800) return res.status(400).json({ error: 'Invalid text length' });

  const voiceId = process.env.ELEVENLABS_VOICE_ID || 'JBFqnCBsd6RMkjVDRZzb';
  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': key
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_v3',
        language_code: language,
        seed: 360,
        apply_text_normalization: 'auto'
      })
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error('ElevenLabs TTS failed', response.status, detail.slice(0, 500));
      return res.status(502).json({ error: 'Voice generation failed' });
    }
    const audio = Buffer.from(await response.arrayBuffer());
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', String(audio.length));
    res.setHeader('Cache-Control', 'private, no-store');
    return res.status(200).send(audio);
  } catch (error) {
    console.error('TTS request error', error);
    return res.status(502).json({ error: 'Voice service unavailable' });
  }
};
