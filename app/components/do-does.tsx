import React from 'react';

// Function to play the phrase using speech synthesis
const speak = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
};

const QuestionsTable = () => {
  // Questions data with "do" and "does" highlighted
  const Questions = [
    { english: <span><span className="highlight">Do</span> you like pizza?</span>, spanish: '¿Te gusta la pizza?' },
    { english: <span><span className="highlight">Do</span> they speak English?</span>, spanish: '¿Hablan ellos inglés?' },
    { english: <span><span className="highlight">Do</span> we need more time?</span>, spanish: '¿Necesitamos más tiempo?' },
    { english: <span><span className="highlight">Do</span> I have to go?</span>, spanish: '¿Tengo que ir?' },
    { english: <span><span className="highlight">Does</span> he play the guitar?</span>, spanish: '¿Él toca la guitarra?' },
    { english: <span><span className="highlight">Does</span> she understand?</span>, spanish: '¿Ella entiende?' },
    { english: <span><span className="highlight">Does</span> it work?</span>, spanish: '¿Funciona?' },
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
  const highlightStyle = {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead className='text-black'>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>English Question</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Spanish Translation</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Questions.map((question, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{question.english}</td>
              <td style={thTdStyle}>{question.spanish}</td>
              <td style={thTdStyle}>
                <button onClick={() => speak(question.english.props.children[1])} style={buttonStyle}>
                  🔊
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CSS for highlighting */}
      <style jsx>{`
        .highlight {
          background-color: yellow;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default QuestionsTable;
