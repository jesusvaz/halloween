import { anecdotas } from '@/app/lib/anecdotas';

// Google Cloud Text-to-Speech, male Spanish neural voice.
const VOICE = { languageCode: 'es-US', name: 'es-US-Neural2-B' };

// Only known texts are synthesized, so the endpoint can't be abused as a free TTS proxy.
export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get('id') ?? '';
  const text = anecdotas[id];
  if (!text) return new Response('Not found', { status: 404 });

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) return new Response('GOOGLE_TTS_API_KEY not configured', { status: 500 });

  const res = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text },
        voice: VOICE,
        audioConfig: { audioEncoding: 'MP3', speakingRate: 1.0, pitch: 0 },
      }),
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) {
    console.error('Google TTS error:', await res.text());
    return new Response('TTS failed', { status: 502 });
  }

  const { audioContent } = await res.json();
  const audio = Buffer.from(audioContent, 'base64');

  return new Response(audio, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Length': String(audio.length),
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable',
    },
  });
}
