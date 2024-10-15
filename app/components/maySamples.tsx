'use client'
import { useState } from "react";

const MayExamplesTable = () => {
  // Function to play the English sentence using speech synthesis
  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = "en-US"; // Set the language to English (US)
    window.speechSynthesis.speak(utterance);
  };

  // Sample data with English sentences and their Spanish translations
  const examples = [
    { english: "It may rain tomorrow.", spanish: "Puede que llueva mañana." },
    { english: "You may leave if you wish.", spanish: "Puedes irte si lo deseas." },
    { english: "She may come to the party later.", spanish: "Ella podría venir a la fiesta más tarde." },
    { english: "This may be the best decision.", spanish: "Esta podría ser la mejor decisión." },
    { english: "They may not agree with us.", spanish: "Ellos pueden no estar de acuerdo con nosotros." },
    { english: "He may not know the answer.", spanish: "Él podría no saber la respuesta." },
    { english: "This may take a while.", spanish: "Esto podría tomar un tiempo." },
    { english: "There may be a solution to the problem.", spanish: "Puede haber una solución al problema." },
    { english: "You may want to reconsider your decision.", spanish: "Puedes querer reconsiderar tu decisión." },
    { english: "We may need more information.", spanish: "Podríamos necesitar más información." },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Ejemplos de como es utilizado y pronunciado "May"</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="border border-gray-300 px-4 py-2">English</th>
            <th className="border border-gray-300 px-4 py-2">Spanish</th>
            <th className="border border-gray-300 px-4 py-2">Accion</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {examples.map((example, index) => (
            <tr key={index} className="bg-white">
              <td className="border border-gray-300 px-4 py-2">{example.english}</td>
              <td className="border border-gray-300 px-4 py-2">{example.spanish}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/speaker.png"
                  alt="Speaker Icon"
                  className="cursor-pointer"
                  onClick={() => playSentence(example.english)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MayExamplesTable;

