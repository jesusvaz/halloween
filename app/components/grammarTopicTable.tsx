import Link from 'next/link';

const GrammarTopicsTable = () => {
  return (
    <div>
      {/* <h1>Temas</h1> */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeader}>Tema</th>
            <th style={tableHeader}>Aprender Tema</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td style={tableCell}>Present Tense</td>
            <td style={tableCell}>
              <Link href="english/present-tense">Go to Present Tense</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Past Tense</td>
            <td style={tableCell}>
              <Link href="english/past-tense">Go to Past Tense</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Future Tense</td>
            <td style={tableCell}>
              <Link href="english/future-tense">Go to Future Tense</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Conditional Tense</td>
            <td style={tableCell}>
              <Link href="english/conditional-tense">Go to Conditional Tense</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Modal Verbs</td>
            <td style={tableCell}>
              <Link href="english/modal-verbs">Go to Modal Verbs</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Passive Voice</td>
            <td style={tableCell}>
              <Link href="english/passive-voice">Go to Passive Voice</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Reported Speech</td>
            <td style={tableCell}>
              <Link href="english/reported-speech">Go to Reported Speech</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Comparatives & Superlatives</td>
            <td style={tableCell}>
              <Link href="english/comparatives-superlatives">Go to Comparatives & Superlatives</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Prepositions</td>
            <td style={tableCell}>
              <Link href="english/prepositions">Go to Prepositions</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Conjunctions</td>
            <td style={tableCell}>
              <Link href="english/conjunctions">Go to Conjunctions</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Conditionals</td>
            <td style={tableCell}>
              <Link href="english/conditional">Go to Would</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Could</td>
            <td style={tableCell}>
              <Link href="english/modal-verbs/couldExamples">Go to Could</Link>
            </td>
          </tr>
          <tr>
            <td style={tableCell}>May</td>
            <td style={tableCell}>
            <Link href="english/modal-verbs/mayExamples">Go to May</Link>
              
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Might</td>
            <td style={tableCell}>
            <Link href="english/modal-verbs/mightDefinition">Go to Might</Link>
              
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Ought</td>
            <td style={tableCell}>
            <Link href="english/modal-verbs/ougthExamples">Go to Ought</Link>
              
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for table headers and cells
const tableHeader = {
  border: '1px solid black',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  textAlign: 'center',
  color: 'black',
  borderRadius: '5px',
};

const tableCell = {
  border: '1px solid black',
  padding: '10px',
  textAlign: 'center',
};

export default GrammarTopicsTable;
