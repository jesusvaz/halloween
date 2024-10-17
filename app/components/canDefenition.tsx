import React from 'react';

const CanDefinition = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-black">The Use of "Can" in English and Spanish</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">Definition of "Can" in English</h2>
        <p className="text-black mb-4">
          In English, the modal verb <strong>“can”</strong> is used to express ability, possibility, permission, and making polite requests.
        </p>

        <h3 className="text-xl font-semibold text-black">Uses of "Can":</h3>
        <ul className="list-disc ml-5 mb-4 text-black">
          <li><strong>Ability</strong>: Used to indicate that someone has the skill or knowledge to do something. <br />
            Example: <em>I can swim.</em> (Puedo nadar.)
          </li>
          <li><strong>Possibility</strong>: Used to indicate something that is possible. <br />
            Example: <em>It can rain tomorrow.</em> (Puede llover mañana.)
          </li>
          <li><strong>Permission</strong>: Used to ask or give permission. Less formal than "may". <br />
            Example: <em>Can I leave early today?</em> (¿Puedo salir temprano hoy?)
          </li>
          <li><strong>Request</strong>: Used to make a polite request or ask a question. <br />
            Example: <em>Can you help me with this?</em> (¿Puedes ayudarme con esto?)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-black">Traducción al español</h2>
        <p className="text-black mb-4">
          En español, el verbo <strong>“can”</strong> se traduce como <strong>“poder”</strong>. Al igual que en inglés, se utiliza para expresar capacidad, posibilidad, permiso o hacer solicitudes, pero el verbo cambia según el tiempo y la persona.
        </p>

        <h3 className="text-xl font-semibold text-black">Ejemplos:</h3>
        <ul className="list-disc ml-5 text-black">
          <li><strong>Capacidad</strong>: <em>I can run fast.</em> → <em>Puedo correr rápido.</em></li>
          <li><strong>Posibilidad</strong>: <em>It can happen anytime.</em> → <em>Puedes suceder en cualquier momento.</em></li>
          <li><strong>Permiso</strong>: <em>Can I use your phone?</em> → <em>¿Puedo usar tu teléfono?</em></li>
          <li><strong>Solicitud</strong>: <em>Can you pass me the salt?</em> → <em>¿Puedes pasarme la sal?</em></li>
        </ul>
      </div>
    </div>
  );
};

export default CanDefinition;
