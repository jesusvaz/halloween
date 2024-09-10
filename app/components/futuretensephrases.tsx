import React from 'react';

const FutureTensePhrases = () => {
  // Function to play the phrase using speech synthesis
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  };

  // Data for the table
  const phrases = [
    { english: 'I will read a book tomorrow.', spanish: 'Yo leeré un libro mañana.' },
    { english: 'She will eat breakfast.', spanish: 'Ella desayunará.' },
    { english: 'We will go to the park.', spanish: 'Iremos al parque.' },
    { english: 'He will play soccer.', spanish: 'Él jugará fútbol.' },
    { english: 'They will work every day.', spanish: 'Ellos trabajarán todos los días.' },
    { english: 'We will watch TV at night.', spanish: 'Veremos la televisión por la noche.' },
    { english: 'You will write letters.', spanish: 'Tú escribirás cartas.' },
    { english: 'She will teach English.', spanish: 'Ella enseñará inglés.' },
    { english: 'We will play the piano.', spanish: 'Tocaremos el piano.' },
    { english: 'I will cook dinner.', spanish: 'Yo cocinaré la cena.' },
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

export default FutureTensePhrases;
