'use client'
import { useState } from 'react';

const OughtExamples = () => {
  const examples = [
    { english: 'You ought to eat more vegetables.', spanish: 'Deberías comer más vegetales.' },
    { english: 'He ought to study harder.', spanish: 'Él debería estudiar más.' },
    { english: 'We ought to help the poor.', spanish: 'Deberíamos ayudar a los pobres.' },
    { english: 'They ought to arrive by noon.', spanish: 'Deberían llegar al mediodía.' },
    { english: 'You ought to respect your elders.', spanish: 'Deberías respetar a tus mayores.' },
    { english: 'She ought to be more careful.', spanish: 'Ella debería ser más cuidadosa.' },
    { english: 'I ought to call my parents more often.', spanish: 'Debería llamar a mis padres más seguido.' },
    { english: 'We ought to finish this project on time.', spanish: 'Deberíamos terminar este proyecto a tiempo.' },
    { english: 'They ought to listen more carefully.', spanish: 'Deberían escuchar con más atención.' },
    { english: 'We ought to get some rest.', spanish: 'Deberíamos descansar un poco.' },
  ];

  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Examples of "Ought" with Speaker Icon</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300 bg-black">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-500 px-4 py-2 text-white">English</th>
            <th className="border border-gray-500 px-4 py-2 text-white">Spanish</th>
            <th className="border border-gray-500 px-4 py-2 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {examples.map((example, index) => (
            <tr key={index} className="hover:bg-gray-700">
              <td className="border border-gray-500 px-4 py-2 text-white">{example.english}</td>
              <td className="border border-gray-500 px-4 py-2 text-white">{example.spanish}</td>
              <td className="border border-gray-500 px-4 py-2 text-center">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                  alt="Speaker Icon"
                  className="cursor-pointer w-6 h-6 mx-auto"
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

export default OughtExamples;
