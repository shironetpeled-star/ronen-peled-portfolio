const visits=new Map();
module.exports=async function handler(req,res){
  res.setHeader('Cache-Control','no-store');if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed'});}
  let host;try{host=new URL(req.headers.origin||'').hostname;}catch{}
  if(!['www.ronenpeled.com','ronenpeled.com'].includes(host))return res.status(403).json({error:'Forbidden'});
  const ip=String(req.headers['x-forwarded-for']||req.socket?.remoteAddress||'unknown').split(',')[0],now=Date.now();for(const [key,times] of visits)if(!times.some(t=>now-t<60000))visits.delete(key);
  const recent=(visits.get(ip)||[]).filter(t=>now-t<60000);if(recent.length>=6)return res.status(429).json({error:'Too many requests'});recent.push(now);visits.set(ip,recent);
  const body=req.body;if(!body||typeof body.audio!=='string'||body.audio.length<100||body.audio.length>2800000||!['audio/webm','audio/ogg','audio/mp4','audio/wav'].includes(body.type))return res.status(400).json({error:'Invalid audio'});
  const key=process.env.ELEVENLABS_API_KEY;if(!key)return res.status(503).json({error:'Transcription is not configured'});
  try{const form=new FormData();form.append('file',new Blob([Buffer.from(body.audio,'base64')],{type:body.type}),'voice.'+({ 'audio/webm':'webm','audio/ogg':'ogg','audio/mp4':'mp4','audio/wav':'wav'}[body.type]));form.append('model_id','scribe_v2');form.append('language_code','heb');form.append('tag_audio_events','false');const response=await fetch('https://api.elevenlabs.io/v1/speech-to-text?enable_logging=false',{method:'POST',headers:{'xi-api-key':key},body:form,signal:AbortSignal.timeout(20000)});if(!response.ok)return res.status(502).json({error:'Transcription failed',upstream_status:response.status});const result=await response.json();return res.status(200).json({text:String(result.text||'').slice(0,1500)});}catch{return res.status(502).json({error:'Transcription unavailable'});}
};