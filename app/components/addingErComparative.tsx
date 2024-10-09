import React, { useState } from 'react';

// Function to play the adjective using speech synthesis
const speak = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
};

// Function to extract the comparative adjective from a sentence
const extractComparative = (phrase) => {
  const words = phrase.split(' ');
  const comparativeWord = words.find(word => word.endsWith('er') || word === 'more');
  return comparativeWord || 'No comparative found';
};

const ComparativesTable = () => {
  const [recordedValues, setRecordedValues] = useState(Array(10).fill('')); // Stores recorded values

  const startRecording = (index) => {
    // Set up the speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const newRecordedValues = [...recordedValues];
      newRecordedValues[index] = transcript;
      setRecordedValues(newRecordedValues); // Update the recorded value in the respective row
    };

    recognition.start();
  };

  // Comparative sentences with translations
  const comparatives = [
    { english: 'John is taller than Mike.', spanish: 'John es más alto que Mike.' },
    { english: 'This book is more interesting than that one.', spanish: 'Este libro es más interesante que ese.' },
    { english: 'Sarah is smarter than Jane.', spanish: 'Sarah es más inteligente que Jane.' },
    { english: 'My car is faster than yours.', spanish: 'Mi coche es más rápido que el tuyo.' },
    { english: 'This problem is easier than the last one.', spanish: 'Este problema es más fácil que el anterior.' },
    { english: 'Dogs are friendlier than cats.', spanish: 'Los perros son más amigables que los gatos.' },
    { english: 'The red shirt is cheaper than the blue one.', spanish: 'La camisa roja es más barata que la azul.' },
    { english: 'He is more hardworking than his brother.', spanish: 'Él es más trabajador que su hermano.' },
    { english: 'The movie was better than the book.', spanish: 'La película fue mejor que el libro.' },
    { english: 'Today is hotter than yesterday.', spanish: 'Hoy hace más calor que ayer.' },
  ];

  // Table styles
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
  const thTdStyle = {
    border: '1px solid black',
    padding: '10px',
    textAlign: 'center',
  };
  const headerStyle = {
    backgroundColor: '#f2f2f2',
  };
  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>English Comparative</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Spanish Translation</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Play Comparative</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Record Your Pronunciation</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Recorded Value</th>
          </tr>
        </thead>
        <tbody>
          {comparatives.map((phrase, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{phrase.english}</td>
              <td style={thTdStyle}>{phrase.spanish}</td>
              <td style={thTdStyle}>
                <button onClick={() => speak(extractComparative(phrase.english))} style={buttonStyle}>
                  🔊
                </button>
              </td>
              <td style={thTdStyle}>
                <button onClick={() => startRecording(index)} style={buttonStyle}>
                  🎤
                </button>
              </td>
              <td style={thTdStyle}>
                {recordedValues[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparativesTable;
