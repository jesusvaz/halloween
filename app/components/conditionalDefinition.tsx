'use client'
import { useEffect } from 'react';

const ConditionalTenseTable = () => {
  // Function to play the English sentence
  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US'; // Set the language to English
    window.speechSynthesis.speak(utterance);
  };

  // Sample data for the table
  const sentences = [
    { spanish: 'Yo correría si tuviera tiempo.', english: 'I would run if I had time.' },
    { spanish: 'Ella iría a la fiesta, pero está ocupada.', english: 'She would go to the party, but she\'s busy.' },
    { spanish: 'Nosotros comeríamos pizza todos los días si pudiéramos.', english: 'We would eat pizza every day if we could.' },
    { spanish: 'Ellos viajarían a Europa el próximo año.', english: 'They would travel to Europe next year.' },
    { spanish: 'Tú hablarías con él, pero no tienes su número.', english: 'You would talk to him, but you don\'t have his number.' },
    { spanish: 'Juan estudiaría más si tuviera tiempo.', english: 'Juan would study more if he had time.' },
    { spanish: '¿Qué harías en mi lugar?', english: 'What would you do in my place?' },
    { spanish: 'Nosotros viviríamos en el campo si fuera más tranquilo.', english: 'We would live in the countryside if it were quieter.' },
    { spanish: 'Ellos comprarían una casa si tuvieran suficiente dinero.', english: 'They would buy a house if they had enough money.' },
    { spanish: 'María escribiría una carta, pero no tiene papel.', english: 'María would write a letter, but she doesn\'t have paper.' },
  ];

  return (
    <div style={{ margin: '20px', backgroundColor: '#f4f4f9', padding: '20px', borderRadius: '8px' }}>
      <h1>Conditional Tense Examples in Spanish and English</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd', backgroundColor: '#4CAF50', color: 'white' }}>
              Español (Condicional)
            </th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd', backgroundColor: '#4CAF50', color: 'white' }}>
              Inglés (Conditional)
            </th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd', backgroundColor: '#4CAF50', color: 'white' }}>
              Acción
            </th>
          </tr>
        </thead>
        <tbody style={{ color: 'black' }}>
          {sentences.map((sentence, index) => (
            <tr key={index}>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{sentence.spanish}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{sentence.english}</td>
              <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>
                <button onClick={() => playSentence(sentence.english)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/speaker.png" alt="Speaker Icon" style={{ width: '24px', height: '24px' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConditionalTenseTable;
