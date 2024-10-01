"use client"
import React from 'react';

// Function to play the phrase using speech synthesis
const speak = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
};

const ComparativesTable = () => {
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
            <th style={{ ...thTdStyle, ...headerStyle }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {comparatives.map((phrase, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{phrase.english}</td>
              <td style={thTdStyle}>{phrase.spanish}</td>
              <td style={thTdStyle}>
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

export default ComparativesTable;
