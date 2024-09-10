import React from 'react';

const PasTensePhrases = () => {
  // Function to play the phrase using speech synthesis
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  };

  // Data for the table
  const phrases = [
    { english: 'I read a book.', spanish: 'Yo leí un libro.' },
    { english: 'She ate breakfast.', spanish: 'Ella desayunó.' },
    { english: 'We went to the park.', spanish: 'Fuimos al parque.' },
    { english: 'He played soccer.', spanish: 'Él jugó fútbol.' },
    { english: 'They worked every day.', spanish: 'Ellos trabajaron todos los días.' },
    { english: 'We watched TV at night.', spanish: 'Vimos la televisión por la noche.' },
    { english: 'You wrote letters.', spanish: 'Tú escribiste cartas.' },
    { english: 'She taught English.', spanish: 'Ella enseñó inglés.' },
    { english: 'We played the piano.', spanish: 'Tocamos el piano.' },
    { english: 'I cooked dinner.', spanish: 'Yo cociné la cena.' },
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

export default PasTensePhrases;
