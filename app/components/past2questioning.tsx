'use client'
// Function to play the phrase using speech synthesis
const speak = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
};

const PastTenseQuestionsTable = () => {
  // Past tense questions with translations
  const Questions = [
    { english: <span><span className="highlight">Did</span> you eat breakfast?</span>, spanish: '¿Desayunaste?' },
    { english: <span><span className="highlight">Did</span> they go to the park?</span>, spanish: '¿Ellos fueron al parque?' },
    { english: <span><span className="highlight">Did</span> we finish the project?</span>, spanish: '¿Terminamos el proyecto?' },
    { english: <span><span className="highlight">Did</span> I leave my keys here?</span>, spanish: '¿Dejé mis llaves aquí?' },
    { english: <span><span className="highlight">Did</span> he call you?</span>, spanish: '¿Él te llamó?' },
    { english: <span><span className="highlight">Did</span> she understand the lesson?</span>, spanish: '¿Ella entendió la lección?' },
    { english: <span><span className="highlight">Did</span> it rain yesterday?</span>, spanish: '¿Llovió ayer?' },
  ];

  // Function to extract the full text from JSX
  const extractText = (jsx) => {
    // Recursively extract text content from JSX elements
    return typeof jsx === 'string'
      ? jsx
      : Array.isArray(jsx.props.children)
      ? jsx.props.children.map(extractText).join(' ')
      : extractText(jsx.props.children);
  };

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
    backgroundColor: '#000000',
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
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>English Question (Past Tense)</th>
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
                <button
                  onClick={() => speak(extractText(question.english))}
                  style={buttonStyle}
                >
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

export default PastTenseQuestionsTable;
