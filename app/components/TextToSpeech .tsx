"use client";

import { useEffect } from 'react';

const TextToSpeech = () => {
  const text = "no vine porque pude sino porque pude vine";

  const handlePlayText = (
  
  ) => {
    if ('speechSynthesis' in window) {
      const allVoices = window.speechSynthesis.getVoices();
      const juanVoice = allVoices.find(
        (voice) => voice.name === "Juan (Spanish (Mexico))" && voice.lang === "es-MX"
      );

      if (juanVoice) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = juanVoice;
        utterance.lang = juanVoice.lang;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('La voz "Juan (Spanish (Mexico))" no está disponible en este navegador.');
      }
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  };

  useEffect(() => {
    // Preload voices (for browsers that require an initial load)
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Voz en Español: Juan (es-MX)</h1>
      <button
        onClick={handlePlayText}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Escuchar: "{text}"
      </button>
    </div>
  );
};

export default HardcodedSpanishVoice;