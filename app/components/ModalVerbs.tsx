

const ModalVerbsTable = () => {
  // Function to play the phrase using speech synthesis
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  };

  // Data for modal verbs
  const modalVerbs = [
    { english: 'Can', spanish: 'Poder', usage: 'Ability, Permission, Possibility', example: 'I can swim.', translation: 'Yo puedo nadar.' },
    { english: 'Could', spanish: 'Pude / Podría', usage: 'Past Ability, Polite Requests, Possibility', example: 'I could run fast.', translation: 'Yo podía correr rápido.' },
    { english: 'May', spanish: 'Poder', usage: 'Permission, Possibility', example: 'May I leave the table?', translation: '¿Puedo dejar la mesa?' },
    { english: 'Might', spanish: 'Podría', usage: 'Possibility, Suggestion', example: 'It might rain.', translation: 'Podría llover.' },
    { english: 'Must', spanish: 'Debe', usage: 'Obligation, Certainty', example: 'You must wear a seatbelt.', translation: 'Debes usar cinturón de seguridad.' },
    { english: 'Shall', spanish: 'Debería', usage: 'Suggestions/Offers, Future Intent (Formal)', example: 'Shall we go?', translation: '¿Deberíamos ir?' },
    { english: 'Should', spanish: 'Deberías', usage: 'Advice, Obligation, Expectation', example: 'You should eat vegetables.', translation: 'Deberías comer vegetales.' },
    { english: 'Will', spanish: 'Será', usage: 'Future Intentions, Promises, Certainty', example: 'I will help you.', translation: 'Te ayudaré.' },
    { english: 'Would', spanish: 'Podría', usage: 'Polite Requests, Hypothetical Situations, Past Habit', example: 'Would you like tea?', translation: '¿Te gustaría té?' },
    { english: 'Ought to', spanish: 'Debería', usage: 'Advice, Obligation', example: 'You ought to rest.', translation: 'Deberías descansar.' },
  ];

  return (
    <div>
      <table  border="1" cellPadding="10" cellSpacing="0" style={{  width: '100%', borderCollapse: 'collapse' }}>
        <thead className='text-black'>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Modal Verb (English)</th>
            <th>Translation (Spanish)</th>
            <th>Usage</th>
            <th>Example</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {modalVerbs.map((verb, index) => (
            <tr key={index}>
              <td>{verb.english}</td>
              <td>{verb.spanish}</td>
              <td>{verb.usage}</td>
              <td>{verb.example} ({verb.translation})</td>
              <td>
                <button onClick={() => speak(verb.example)}>🔊</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModalVerbsTable;
