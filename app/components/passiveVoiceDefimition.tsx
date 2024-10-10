import React from 'react';

const PassiveVoiceDefinition = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Definición de la Voz Pasiva en Inglés</h1>
      <p className="text-gray-700 mb-4">
        La <strong>voz pasiva</strong> en inglés se utiliza para dar énfasis a la acción en lugar de quien la realiza. Se usa cuando el agente es desconocido, irrelevante, o cuando se desea destacar más el objeto que recibe la acción.
      </p>

      <h2 className="text-xl font-semibold mb-2">Estructura de la Voz Pasiva</h2>
      <p className="text-gray-700 mb-4">
        La estructura básica es: <br />
        <strong>Sujeto (Objeto en la voz activa) + verbo "to be" + participio pasado + (por + agente)</strong>
      </p>
      <p className="text-gray-700 mb-4">
        El verbo "to be" se conjuga en el mismo tiempo que el verbo principal en la voz activa, seguido por el participio pasado del verbo principal.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ejemplos en Diferentes Tiempos</h2>

      <h3 className="text-lg font-semibold mb-2">1. Presente Simple</h3>
      <p className="text-gray-700 mb-4">
        <strong>Voz Activa:</strong> "They deliver the package." (Ellos entregan el paquete.)<br />
        <strong>Voz Pasiva:</strong> "The package is delivered." (El paquete es entregado.)
      </p>

      <h3 className="text-lg font-semibold mb-2">2. Pasado Simple</h3>
      <p className="text-gray-700 mb-4">
        <strong>Voz Activa:</strong> "She wrote the letter." (Ella escribió la carta.)<br />
        <strong>Voz Pasiva:</strong> "The letter was written." (La carta fue escrita.)
      </p>

      <h3 className="text-lg font-semibold mb-2">3. Futuro Simple</h3>
      <p className="text-gray-700 mb-4">
        <strong>Voz Activa:</strong> "They will complete the project." (Ellos completarán el proyecto.)<br />
        <strong>Voz Pasiva:</strong> "The project will be completed." (El proyecto será completado.)
      </p>

      <h3 className="text-lg font-semibold mb-2">4. Presente Perfecto</h3>
      <p className="text-gray-700 mb-4">
        <strong>Voz Activa:</strong> "They have cleaned the house." (Han limpiado la casa.)<br />
        <strong>Voz Pasiva:</strong> "The house has been cleaned." (La casa ha sido limpiada.)
      </p>

      <h3 className="text-lg font-semibold mb-2">5. Condicional</h3>
      <p className="text-gray-700 mb-4">
        <strong>Voz Activa:</strong> "They would build the bridge." (Ellos construirían el puente.)<br />
        <strong>Voz Pasiva:</strong> "The bridge would be built." (El puente sería construido.)
      </p>

      <h2 className="text-xl font-semibold mb-2">Uso del Agente en la Voz Pasiva</h2>
      <p className="text-gray-700 mb-4">
        El agente (quien realiza la acción) puede omitirse en la voz pasiva si no es importante o es desconocido. Si se menciona, se usa la preposición <strong>"by"</strong>. <br />
        <strong>Ejemplo:</strong> "The book was written <strong>by</strong> the author." (El libro fue escrito <strong>por</strong> el autor.)
      </p>

      <h2 className="text-xl font-semibold mb-2">Cuándo Usar la Voz Pasiva</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Cuando el agente no es importante o es desconocido:</strong> "The window was broken." (La ventana fue rota.)</li>
        <li><strong>Para destacar el objeto o resultado de la acción:</strong> "A new road is being built." (Se está construyendo una nueva carretera.)</li>
        <li><strong>Para ser más formal o impersonal:</strong> "Mistakes were made." (Se cometieron errores.)</li>
      </ul>
    </div>
  );
};

export default PassiveVoiceDefinition;
