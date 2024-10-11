

const ReportedSpeechDefinition = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Definición del Estilo Indirecto (Reported Speech) en Inglés</h1>
      <p className="text-gray-700 mb-4">
        El <strong>Reported Speech</strong> o <strong>Estilo Indirecto</strong> en inglés se utiliza para reportar lo que otra persona ha dicho sin citar directamente sus palabras. En vez de usar comillas, parafraseamos lo que se dijo, adaptando tiempos verbales, pronombres, y adverbios de tiempo y lugar.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cambios en los Tiempos Verbales</h2>
      <p className="text-gray-700 mb-4">
        Cuando el verbo principal del discurso está en pasado, los tiempos verbales cambian de la siguiente manera:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Presente Simple</strong> → <strong>Pasado Simple</strong></li>
        <p>"I study every day." → He said that he <strong>studied</strong> every day.</p>

        <li><strong>Presente Continuo</strong> → <strong>Pasado Continuo</strong></li>
        <p>"I am working now." → She said that she <strong>was working</strong> then.</p>

        <li><strong>Pasado Simple</strong> → <strong>Pasado Perfecto</strong></li>
        <p>"I visited Paris last year." → He said that he <strong>had visited</strong> Paris the previous year.</p>

        <li><strong>Presente Perfecto</strong> → <strong>Pasado Perfecto</strong></li>
        <p>"I have finished my homework." → She said that she <strong>had finished</strong> her homework.</p>

        <li><strong>Futuro Simple (will)</strong> → <strong>Condicional (would)</strong></li>
        <p>"I will call you tomorrow." → He said that he <strong>would call</strong> me the next day.</p>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Cambios en los Pronombres</h2>
      <p className="text-gray-700 mb-4">
        Los pronombres cambian según la perspectiva de quien reporta el discurso. <br />
        Ejemplo: "I like your idea." → She said that <strong>she</strong> liked <strong>my</strong> idea.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cambios en los Adverbios de Tiempo y Lugar</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>now</strong> → then</li>
        <li><strong>today</strong> → that day</li>
        <li><strong>yesterday</strong> → the day before</li>
        <li><strong>tomorrow</strong> → the next day</li>
        <li><strong>here</strong> → there</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Ejemplo: "I will meet you here tomorrow." → She said that she <strong>would meet</strong> me <strong>there</strong> the <strong>next day</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ejemplos de Estilo Directo e Indirecto</h2>
      <p className="text-gray-700 mb-4">
        <strong>Directo:</strong> "I am going to the party tonight." <br />
        <strong>Indirecto:</strong> She said that she <strong>was going</strong> to the party <strong>that night</strong>.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Directo:</strong> "We have finished the project." <br />
        <strong>Indirecto:</strong> They said that they <strong>had finished</strong> the project.
      </p>

      <h2 className="text-xl font-semibold mb-2">Uso del Estilo Indirecto</h2>
      <p className="text-gray-700 mb-4">
        El estilo indirecto es útil cuando queremos informar lo que alguien ha dicho sin repetirlo exactamente. En muchos casos, cuando el verbo principal está en presente o el hecho reportado sigue siendo válido, los tiempos verbales no cambian.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Directo:</strong> "I like ice cream." <br />
        <strong>Indirecto:</strong> He says that he <strong>likes</strong> ice cream. (No hay cambio en el tiempo verbal porque es una verdad permanente.)
      </p>
    </div>
  );
};

export default ReportedSpeechDefinition;
