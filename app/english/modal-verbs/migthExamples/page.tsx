'use client'
import { useEffect } from 'react';

const MightExamplesTable = () => {
  // Function to handle the speech synthesis
  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  // Example data for the table
  const examples = [
    { english: "It might rain tomorrow.", spanish: "Podría llover mañana." },
    { english: "She might come to the party.", spanish: "Ella podría venir a la fiesta." },
    { english: "They might not know the answer.", spanish: "Ellos podrían no saber la respuesta." },
    { english: "We might go to the beach.", spanish: "Podríamos ir a la playa." },
    { english: "This might be the right time.", spanish: "Este podría ser el momento adecuado." },
    { english: "He might not come today.", spanish: "Él podría no venir hoy." },
    { english: "It might take longer than expected.", spanish: "Podría tardar más de lo esperado." },
    { english: "She might want to call you.", spanish: "Ella podría querer llamarte." },
    { english: "He might have forgotten his keys.", spanish: "Él podría haber olvidado sus llaves." },
    { english: "You might not like the movie.", spanish: "Podrías que no te guste la película." },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Examples of "Might" with Speaker Icon</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="p-4 border">English</th>
            <th className="p-4 border">Spanish</th>
            <th className="p-4 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {examples.map((example, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="p-4 border">{example.english}</td>
              <td className="p-4 border">{example.spanish}</td>
              <td className="p-4 border text-center">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/speaker.png"
                  alt="Speaker Icon"
                  className="cursor-pointer mx-auto"
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

export default MightExamplesTable;
