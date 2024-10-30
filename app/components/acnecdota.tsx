'use client'
import { useState } from 'react';


const PlayParagraph = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const text = "Don Humberto, siempre atento y cariñoso, había prometido a Doña Luz que algún día le regalaría una televisión para que pudiera disfrutar de sus programas favoritos en casa. A pesar de las limitaciones económicas y el esfuerzo que implicaba, no perdió la ilusión de cumplir su promesa. Fue ahorrando pacientemente y, en cuanto tuvo el dinero suficiente, se dirigió con determinación a la tienda. Con una sonrisa de satisfacción, adquirió la televisión que tanto deseaba Doña Luz y se la llevó a casa, complaciéndola de una manera especial y llenando de alegría su hogar.";

  const handlePlayText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in this browser.');
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
