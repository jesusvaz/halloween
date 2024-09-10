import React from 'react';

const PhrasesTable = () => {
  // Function to play the phrase using speech synthesis
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  };

  // Data for the table
  const phrases = [
    { english: 'I read a book Toay.', spanish: 'Yo leo un libro hoy.' },
    { english: 'She eats breakfast.', spanish: 'Ella desayuna.' },
    { english: 'We go to the park.', spanish: 'Vamos al parque.' },
    { english: 'He plays soccer.', spanish: 'Él juega fútbol.' },
    { english: 'They work every day.', spanish: 'Ellos trabajan todos los días.' },
    { english: 'We watch TV at night.', spanish: 'Vemos la televisión por la noche.' },
    { english: 'You write letters.', spanish: 'Tú escribes cartas.' },
    { english: 'She teaches English.', spanish: 'Ella enseña inglés.' },
    { english: 'We play the piano.', spanish: 'Tocamos el piano.' },
    { english: 'I cook dinner.', spanish: 'Yo cocino la cena.' },
  ];

  return (
    <div>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeader }>English Phrase</th>
            <th style={tableHeader}>Translation (Spanish)</th>
            <th style={tableHeader}>Play</th>
          </tr>
        </thead>
        <tbody>
          {phrases.map((phrase, index) => (
            <tr key={index}>
              <td style={tableCell}>{phrase.english}</td>
              <td style={tableCell}>{phrase.spanish}</td>
              <td style={tableCell}>
                <button onClick={() => speak(phrase.english)} style={buttonStyle}>
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

// Inline styles
const tableHeader = {
  border: '1px solid black',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  textAlign: 'center',
  color: 'black', 
  borderRadius: '10px', 
};

const tableCell = {
  border: '1px solid black',
  padding: '10px',
  textAlign: 'center',
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '18px',
  cursor: 'pointer',
};

export default PhrasesTable;
