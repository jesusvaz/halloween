'use client'
import React from 'react';

const ShallExamples = () => {
  const handlePlay = (text) => {
    // Create speech synthesis
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const examples = [
    { en: "Shall we go to the park?", es: "¿Vamos al parque?" },
    { en: "I shall return tomorrow.", es: "Volveré mañana." },
    { en: "Shall I open the window?", es: "¿Debo abrir la ventana?" },
    { en: "You shall do your homework.", es: "Deberás hacer tu tarea." },
    { en: "We shall overcome this challenge.", es: "Superaremos este desafío." },
    { en: "He shall not enter the room.", es: "Él no entrará en la habitación." },
    { en: "Shall we start the meeting now?", es: "¿Empezamos la reunión ahora?" },
    { en: "I shall help you with your project.", es: "Te ayudaré con tu proyecto." },
    { en: "Shall we dance?", es: "¿Bailamos?" },
    { en: "The report shall be ready by Friday.", es: "El informe estará listo para el viernes." }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Examples of "Shall" with Translations</h1>
      
      <table className="min-w-full bg-black text-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">English Example</th>
            <th className="px-4 py-2 text-left">Spanish Translation</th>
            <th className="px-4 py-2 text-center">Play</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {examples.map((example, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2">{example.en}</td>
              <td className="px-4 py-2">{example.es}</td>
              <td className="px-4 py-2 text-center">
                <button onClick={() => handlePlay(example.en)}>
                  🔊
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShallExamples;
