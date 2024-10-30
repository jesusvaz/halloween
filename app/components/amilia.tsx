'use client'
import { useState } from 'react';


const PlayParagraph = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const text = "Don Humberto, con una dedicación incansable y un espíritu de sacrificio admirable, logró mantener a su gran familia de doce miembros, donde cada uno encontraba su manera de aportar al hogar. Beatriz, la mayor, siempre ayudaba a cuidar de los más pequeños, mientras que Humberto y Deisy trabajaban en cuanto podían, encontrando empleos que les permitieran contribuir con los gastos familiares. Carmen, José y Alfredo también buscaban trabajos para apoyar en casa, aprendiendo desde jóvenes la importancia de ganarse la vida. Ana y Toña, con su energía, realizaban labores que aligeraban el peso de su padre. Marissa, Lola, Pablo y Álvaro, aunque los más pequeños, crecieron rodeados de este esfuerzo colectivo, inspirados por el ejemplo de cada hermano. Así, Don Humberto, junto a sus hijos, construyó un hogar donde el trabajo y el compromiso les permitieron salir adelante, enfrentando cada reto unidos y determinados a superar las dificultades.";

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
