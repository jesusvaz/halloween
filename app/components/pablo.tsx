'use client';

import { useState, useEffect } from 'react';

const PlayParagraph = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [juanVoice, setJuanVoice] = useState<SpeechSynthesisVoice | null>(null);

  const text = "Tío Pablo tenía una manera única de jugar con sus sobrinos: los “torturaba” con cosquillas y juegos de manos que, aunque los hacían retorcerse y gritar de risa, todos disfrutaban a su manera. Con su característico “ñañaña” —ese sonido misterioso que usaba justo antes de lanzarse hacia ellos— lograba que todos se pusieran en guardia, tratando de prever el momento en que su tío los atraparía para comenzar su “tortura” de risas. Los años pasaron y, aunque todos mantenían en su memoria esos juegos inolvidables, para Chuy tuvieron que pasar 45 años antes de encontrar la oportunidad perfecta para vengarse de aquellas cosquillas y sustos que su tío Pablo le había dado. Fue entonces cuando, con una sonrisa pícara, Chuy finalmente se cobró aquella vieja deuda, recordando los momentos que hicieron de la niñez algo tan divertido y especial.";

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const juan = voices.find(
          (voice) => voice.name === 'Juan (Spanish (Mexico))' && voice.lang === 'es-MX'
        );
        setJuanVoice(juan || null);
      };

      // Load voices initially
      loadVoice();

      // Re-load voices if the browser updates them
      window.speechSynthesis.onvoiceschanged = loadVoice;
    }
  }, []);

  const handlePlayText = () => {
    if (juanVoice && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = juanVoice;
      utterance.lang = juanVoice.lang;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('La voz "Juan (Spanish (Mexico))" no está disponible en este navegador.');
    }
  };

  return (
    <div>
      <p>{text}</p>
      <button
        onClick={handlePlayText}
        disabled={isPlaying}
        className="bg-blue-500 text-white p-2 mt-2 rounded"
      >
        {isPlaying ? 'Reproduciendo...' : 'Escuchar'}
      </button>
    </div>
  );
};

export default PlayParagraph;


// 'use client'
// import { useState } from 'react';


// const PlayParagraph = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const text = "Tío Pablo tenía una manera única de jugar con sus sobrinos: los “torturaba” con cosquillas y juegos de manos que, aunque los hacían retorcerse y gritar de risa, todos disfrutaban a su manera. Con su característico “ñañaña” —ese sonido misterioso que usaba justo antes de lanzarse hacia ellos— lograba que todos se pusieran en guardia, tratando de prever el momento en que su tío los atraparía para comenzar su “tortura” de risas. Los años pasaron y, aunque todos mantenían en su memoria esos juegos inolvidables, para Chuy tuvieron que pasar 45 años antes de encontrar la oportunidad perfecta para vengarse de aquellas cosquillas y sustos que su tío Pablo le había dado. Fue entonces cuando, con una sonrisa pícara, Chuy finalmente se cobró aquella vieja deuda, recordando los momentos que hicieron de la niñez algo tan divertido y especial.";

//   const handlePlayText = () => {
//     if ('speechSynthesis' in window) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.lang = 'es-ES';
//       utterance.onstart = () => setIsPlaying(true);
//       utterance.onend = () => setIsPlaying(false);
//       window.speechSynthesis.speak(utterance);
//     } else {
//       alert('Speech synthesis not supported in this browser.');
//     }
//   };

//   return (
//     <div>
//       <p>{text}</p>
//       <button 
//         onClick={handlePlayText} 
//         disabled={isPlaying} 
//         className="bg-blue-500 text-white p-2 mt-2 rounded"
//       >
//         {isPlaying ? 'Reproduciendo...' : 'Escuchar'}
//       </button>
//     </div>
//   );
// };

// export default PlayParagraph;
