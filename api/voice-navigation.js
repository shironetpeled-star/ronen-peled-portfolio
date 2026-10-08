const WEBHOOK = 'https://hook.eu1.make.com/h2if01ja6sj932kik6phbyxf4li1h25c';
const visits = new Map();
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({error:'Method not allowed'}); }
  let origin;
  try { origin = new URL(req.headers.origin || '').hostname; } catch {}
  if (!['www.ronenpeled.com','ronenpeled.com'].includes(origin)) return res.status(403).json({error:'Forbidden'});
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0];
  const now = Date.now();
  for (const [key, times] of visits) if (!times.some(t=>now-t<60000)) visits.delete(key);
  const recent=(visits.get(ip)||[]).filter(t=>now-t<60000);
  if (recent.length>=20) return res.status(429).json({error:'Too many requests'});
  recent.push(now); visits.set(ip,recent);
  const body=req.body;
  if (!body || !['open','navigate'].includes(body.action) || JSON.stringify(body).length>120000) return res.status(400).json({error:'Invalid request'});
  const payload={webhook_name:'site_voice_nevegation',site:'https://www.ronenpeled.com',action:body.action,session_id:String(body.session_id||'').slice(0,80),page:String(body.page||'').slice(0,250),transcript:String(body.transcript||'').slice(0,1500),target:String(body.target||'').slice(0,500),date:String(body.date||'').slice(0,20),remap:body.remap===true,site_map:Array.isArray(body.site_map)?body.site_map.slice(0,500):[]};
  try {
    const response=await fetch(WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(12000)});
    if (!response.ok) return res.status(502).json({error:'Make did not accept the request',upstream_status:response.status});
    const text=await response.text(); let result=null;
    try { result=JSON.parse(text); } catch {}
    return res.status(200).json({ok:true,accepted:true,result});
  } catch { return res.status(502).json({error:'Make is unavailable'}); }
};