'use client'
import React from 'react';

const CanExamples = () => {
  const playAudio = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-black">10 Examples Using "Can" with Speaker</h1>
      <table className="w-full border-collapse bg-black">
        <thead>
          <tr>
            <th className="border border-white px-4 py-2 bg-white text-black">English</th>
            <th className="border border-white px-4 py-2 bg-white text-black">Spanish</th>
            <th className="border border-white px-4 py-2 bg-white text-black">Listen</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr>
            <td className="border border-white px-4 py-2 bg-white">I can swim.</td>
            <td className="border border-white px-4 py-2 bg-white">Puedo nadar.</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('I can swim.')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">Can you help me?</td>
            <td className="border border-white px-4 py-2 bg-white">¿Puedes ayudarme?</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('Can you help me?')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">She can drive a car.</td>
            <td className="border border-white px-4 py-2 bg-white">Ella puede conducir un coche.</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('She can drive a car.')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">They can play the piano.</td>
            <td className="border border-white px-4 py-2 bg-white">Ellos pueden tocar el piano.</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('They can play the piano.')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">We can cook dinner.</td>
            <td className="border border-white px-4 py-2 bg-white">Podemos cocinar la cena.</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('We can cook dinner.')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">Can I borrow your pen?</td>
            <td className="border border-white px-4 py-2 bg-white">¿Puedo tomar prestado tu bolígrafo?</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('Can I borrow your pen?')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">You can trust me.</td>
            <td className="border border-white px-4 py-2 bg-white">Puedes confiar en mí.</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('You can trust me.')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">Can we go now?</td>
            <td className="border border-white px-4 py-2 bg-white">¿Podemos irnos ahora?</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('Can we go now?')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">He can speak three languages.</td>
            <td className="border border-white px-4 py-2 bg-white">Él puede hablar tres idiomas.</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('He can speak three languages.')}>🔊</span>
            </td>
          </tr>
          <tr>
            <td className="border border-white px-4 py-2 bg-white">Can you meet me tomorrow?</td>
            <td className="border border-white px-4 py-2 bg-white">¿Puedes reunirte conmigo mañana?</td>
            <td className="border border-white px-4 py-2 bg-white">
              <span className="cursor-pointer" onClick={() => playAudio('Can you meet me tomorrow?')}>🔊</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CanExamples;
