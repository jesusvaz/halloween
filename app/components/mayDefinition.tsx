const MayDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-black mb-4">Uso de "May" en Inglés</h1>

      {/* English Definition */}
      <h2 className="text-xl font-semibold text-black mb-2">Definition in English</h2>
      <p className="text-black mb-4">
        The modal verb <strong>"may"</strong> is used to express:
      </p>
      <ul className="list-disc list-inside text-black mb-6">
        <li><strong>Permission:</strong> Used to give or request permission in a polite or formal way.</li>
        <li><strong>Possibility:</strong> Indicates that something is possible but not certain.</li>
        <li><strong>Uncertainty:</strong> Used when talking about something that might or might not happen.</li>
      </ul>

      {/* Spanish Definition */}
      <h2 className="text-xl font-semibold text-black mb-2">Definición en Español</h2>
      <p className="text-black mb-4">
        El verbo modal <strong>"may"</strong> se usa para expresar:
      </p>
      <ul className="list-disc list-inside text-black mb-6">
        <li><strong>Permiso:</strong> Se utiliza para dar o pedir permiso de manera educada o formal.</li>
        <li><strong>Posibilidad:</strong> Indica que algo es posible, pero no es seguro.</li>
        <li><strong>Incertidumbre:</strong> Se usa cuando algo puede o no suceder.</li>
      </ul>

      {/* Example Sentences */}
      <h2 className="text-xl font-semibold text-black mb-4">Ejemplos</h2>
      <table className="w-full table-auto bg-white border-collapse border border-gray-300">
        <thead className="text-black bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Inglés</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Español</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr>
            <td className="border border-gray-300 px-4 py-2">You <strong>may</strong> leave now.</td>
            <td className="border border-gray-300 px-4 py-2">Puedes irte ahora.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">It <strong>may</strong> snow tomorrow.</td>
            <td className="border border-gray-300 px-4 py-2">Puede que nieve mañana.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><strong>May</strong> I open the window?</td>
            <td className="border border-gray-300 px-4 py-2">¿Puedo abrir la ventana?</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">She <strong>may</strong> not know about the meeting.</td>
            <td className="border border-gray-300 px-4 py-2">Ella podría no saber de la reunión.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MayDefinition;
