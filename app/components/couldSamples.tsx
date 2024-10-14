'use client'
import React, { useState } from 'react';

const CouldDefinition = () => {
    // Function to play the English sentence
    const playSentence = (sentence) => {
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.lang = 'en-US'; // Set the language to English
      window.speechSynthesis.speak(utterance);
    };
  
    return (
      <div style={{ margin: '20px', backgroundColor: '#f4f4f9', padding: '20px', borderRadius: '8px' }}>
        <h1 style={{ color: '#333' }}>Uso de "Could" en Inglés</h1>
  
        <h2>Definición en Inglés</h2>
        <p style={{ color: '#555' }}>
          The modal verb <strong>"could"</strong> is used to express:
        </p>
        <ul style={{ color: '#555' }}>
          <li><strong>Ability in the past:</strong> Refers to something someone was able to do in the past.</li>
          <li><strong>Polite requests or suggestions:</strong> Used to ask for permission or make polite offers or suggestions.</li>
          <li><strong>Possibility:</strong> Expresses a possibility or potential outcome.</li>
          <li><strong>Hypothetical situations:</strong> Used to describe what might happen or could have happened.</li>
        </ul>
  
        <h2>Definición en Español</h2>
        <p style={{ color: '#555' }}>
          El verbo modal <strong>"could"</strong> se usa para expresar:
        </p>
        <ul style={{ color: '#555' }}>
          <li><strong>Habilidad en el pasado:</strong> Se refiere a algo que alguien era capaz de hacer en el pasado.</li>
          <li><strong>Peticiones o sugerencias corteses:</strong> Se utiliza para pedir permiso o hacer ofertas o sugerencias de manera educada.</li>
          <li><strong>Posibilidad:</strong> Expresa una posibilidad o un resultado potencial.</li>
          <li><strong>Situaciones hipotéticas:</strong> Se usa para describir lo que podría suceder o lo que podría haber sucedido.</li>
        </ul>
  
        <h2>Ejemplos</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd', backgroundColor: '#4CAF50', color: 'white' }}>Inglés</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd', backgroundColor: '#4CAF50', color: 'white' }}>Español</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd', backgroundColor: '#4CAF50', color: 'white' }}>Acción</th>
            </tr>
          </thead>
          <tbody style={{ color: 'black' }}>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>She <strong>could</strong> swim when she was a child.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Ella <strong>podía</strong> nadar cuando era niña.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button onClick={() => playSentence("She could swim when she was a child.")} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/speaker.png" alt="Speaker Icon" style={{ width: '24px', height: '24px' }} />
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Could</strong> I borrow your pen?</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>¿<strong>Podría</strong> pedirte prestado tu bolígrafo?</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button onClick={() => playSentence("Could I borrow your pen?")} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/speaker.png" alt="Speaker Icon" style={{ width: '24px', height: '24px' }} />
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>It <strong>could</strong> be true, but we don’t know for sure.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}> <strong>Podría</strong> ser cierto, pero no lo sabemos con certeza.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button onClick={() => playSentence("It could be true, but we don’t know for sure.")} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/speaker.png" alt="Speaker Icon" style={{ width: '24px', height: '24px' }} />
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>If I saved more money, I <strong>could</strong> travel around the world.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Si ahorrara más dinero, <strong>podría</strong> viajar por el mundo.</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button onClick={() => playSentence("If I saved more money, I could travel around the world.")} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/speaker.png" alt="Speaker Icon" style={{ width: '24px', height: '24px' }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CouldDefinition;
  