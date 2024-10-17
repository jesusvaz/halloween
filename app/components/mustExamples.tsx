'use client'
import { useEffect } from 'react';

const MustExamples = () => {
  // Function to play the English sentence
  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <table className="table-auto w-4/5 bg-gray-900 text-left">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-600 px-4 py-2">English</th>
            <th className="border-b-2 border-gray-600 px-4 py-2">Spanish</th>
            <th className="border-b-2 border-gray-600 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">You must eat healthy food.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debes comer alimentos saludables.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('You must eat healthy food.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">He must arrive on time.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debe llegar a tiempo.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('He must arrive on time.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">You must not smoke here.</td>
            <td className="border-b border-gray-600 px-4 py-2">No debes fumar aquí.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('You must not smoke here.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">We must finish the project today.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debemos terminar el proyecto hoy.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('We must finish the project today.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">You must follow the rules.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debes seguir las reglas.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('You must follow the rules.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">She must be very tired.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debe estar muy cansada.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('She must be very tired.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">We must study harder.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debemos estudiar más duro.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('We must study harder.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">They must clean the house before leaving.</td>
            <td className="border-b border-gray-600 px-4 py-2">Deben limpiar la casa antes de irse.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('They must clean the house before leaving.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">You must apologize to her.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debes disculparte con ella.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('You must apologize to her.')}
              />
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border-b border-gray-600 px-4 py-2">He must be home by now.</td>
            <td className="border-b border-gray-600 px-4 py-2">Debe estar en casa ahora.</td>
            <td className="border-b border-gray-600 px-4 py-2">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/speaker.png"
                alt="Speaker Icon"
                className="cursor-pointer"
                onClick={() => playSentence('He must be home by now.')}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MustExamples;
