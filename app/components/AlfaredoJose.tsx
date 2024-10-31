'use client';

import { useState, useEffect } from 'react';

const PlayParagraph = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [juanVoice, setJuanVoice] = useState<SpeechSynthesisVoice | null>(null);

  const text = "Alfredo y José trabajaron durante años en plataformas, donde más de una vez se echaron unas buenas risas al recordar sus aventuras y el inesperado consuelo que encontraron… aunque no precisamente el consuelo emocional que esperaban. Resulta que Consuelo era, nada menos, la novia de su Tío Pablo, quien siempre les advertía entre risas que no se metieran con ella, porque no le siguieran a Tía Olivia, su otra novia, quien no tenía paciencia para los juegos. Pero eso sí, todos sabían que si cometían algún error o quebraban algo, Tío Pablo, con su famoso ñañaña les recordaría que en ese mundo de trabajo y familia, había que cuidarse, o hasta ahí llegabas. Así, entre bromas y advertencias, Alfredo y José aprendieron a ganarse la vida en la plataforma, mientras la presencia de Tío Pablo, Consuelo y Olivia quedaba siempre en su memoria, llenándola de risas y consejos inolvidables.";
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

//   const text = "Alfredo y José trabajaron durante años en plataformas, donde más de una vez se echaron unas buenas risas al recordar sus aventuras y el inesperado consuelo que encontraron… aunque no precisamente el consuelo emocional que esperaban. Resulta que Consuelo era, nada menos, la novia de su Tío Pablo, quien siempre les advertía entre risas que no se metieran con ella, porque no le siguieran a Tía Olivia, su otra novia, quien no tenía paciencia para los juegos. Pero eso sí, todos sabían que si cometían algún error o quebraban algo, Tío Pablo, con su famoso ñañaña les recordaría que en ese mundo de trabajo y familia, había que cuidarse, o hasta ahí llegabas. Así, entre bromas y advertencias, Alfredo y José aprendieron a ganarse la vida en la plataforma, mientras la presencia de Tío Pablo, Consuelo y Olivia quedaba siempre en su memoria, llenándola de risas y consejos inolvidables.";

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
