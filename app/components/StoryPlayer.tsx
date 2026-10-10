'use client';

import { useState, useRef, useEffect } from 'react';
import { anecdotas } from '@/app/lib/anecdotas';

// Known male Spanish voices on iOS, Android, macOS and Windows, in order of preference.
const MALE_VOICE_NAMES = ['Jorge', 'Juan', 'Diego', 'Carlos', 'Pablo', 'Enrique', 'Raul', 'Alvaro', 'Jorge Enhanced', 'male'];

// High-quality (neural/online) voices sound much clearer than the compact default ones.
const QUALITY_MARKERS = ['premium', 'enhanced', 'mejorada', 'natural', 'neural', 'online', 'google'];

const quality = (v: SpeechSynthesisVoice) => {
  const name = v.name.toLowerCase();
  return QUALITY_MARKERS.some((m) => name.includes(m)) || !v.localService ? 1 : 0;
};

const pickMaleSpanishVoice = (): SpeechSynthesisVoice | null => {
  const voices = window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('es'))
    .sort((a, b) => quality(b) - quality(a));
  for (const name of MALE_VOICE_NAMES) {
    const match = voices.find((v) => v.name.toLowerCase().includes(name.toLowerCase()));
    if (match) return match;
  }
  return voices.find((v) => v.lang === 'es-MX' || v.lang === 'es-US') || voices[0] || null;
};

// Only one story plays at a time; starting another stops the current one.
let current: { owner: object; stop: () => void } | null = null;

const StoryPlayer = ({ id }: { id: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const useFallbackRef = useRef(false);
  const ownerRef = useRef({});

  const text = anecdotas[id];

  const stop = () => {
    audioRef.current?.pause();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsLoading(false);
  };

  const claimPlayback = () => {
    if (current && current.owner !== ownerRef.current) current.stop();
    current = { owner: ownerRef.current, stop };
  };

  useEffect(() => {
    // Some browsers load voices asynchronously; trigger the load early.
    if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
    return () => {
      audioRef.current?.pause();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  // Used only if the Google TTS audio can't be loaded.
  const speakWithDeviceVoice = () => {
    if (!('speechSynthesis' in window)) {
      setIsLoading(false);
      alert('Tu navegador no soporta la lectura en voz alta.');
      return;
    }
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickMaleSpanishVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || 'es-MX';
    // Natural pitch and speed: changing them makes device voices sound robotic.
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };
    synth.speak(utterance);
  };

  // play() must be called synchronously inside the tap handler for iOS/Android to allow audio.
  const handlePlayText = () => {
    if (isPlaying) {
      stop();
      return;
    }

    claimPlayback();

    if (useFallbackRef.current) {
      speakWithDeviceVoice();
      return;
    }

    if (!audioRef.current) {
      // Unlock speech synthesis during the tap so the fallback can speak later on iOS.
      if ('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
      const audio = new Audio(`/api/tts?id=${encodeURIComponent(id)}`);
      audio.preload = 'auto';
      audio.onwaiting = () => setIsLoading(true);
      audio.onplaying = () => {
        setIsLoading(false);
        setIsPlaying(true);
      };
      audio.onpause = () => setIsPlaying(false);
      audio.onended = () => {
        setIsPlaying(false);
        audio.currentTime = 0;
      };
      audio.onerror = () => {
        console.error('Google TTS audio failed, using device voice. Check GOOGLE_TTS_API_KEY.');
        audioRef.current = null;
        useFallbackRef.current = true;
        speakWithDeviceVoice();
      };
      audioRef.current = audio;
    }

    setIsLoading(true);
    audioRef.current.play().catch(() => {
      // Error is handled by onerror; this only catches autoplay rejections.
      if (!useFallbackRef.current) setIsLoading(false);
    });
  };

  return (
    <div>
      <p>{text}</p>
      <button
        onClick={handlePlayText}
        disabled={isLoading}
        className="bg-blue-500 text-white p-2 mt-2 rounded"
      >
        {isLoading ? 'Cargando...' : isPlaying ? 'Pausar' : 'Escuchar'}
      </button>
    </div>
  );
};

export default StoryPlayer;
