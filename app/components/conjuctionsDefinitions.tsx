import React from 'react';

const Conjunctions = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Uso de las Conjunciones en Inglés</h1>
      <p className="text-gray-700 mb-4">
        Las <strong>conjunciones</strong> en inglés son palabras que conectan oraciones, frases o palabras, permitiendo que el discurso fluya de manera coherente. Existen tres tipos principales de conjunciones: <strong>coordinadas</strong>, <strong>subordinadas</strong> y <strong>correlativas</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Conjunciones Coordinadas (Coordinating Conjunctions)</h2>
      <p className="text-gray-700 mb-4">
        Estas conjunciones conectan palabras, frases u oraciones con la misma importancia gramatical. Las más comunes se recuerdan con el acrónimo <strong>FANBOYS</strong> (For, And, Nor, But, Or, Yet, So).
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>For</strong>: Expresa una razón o causa. <br />
          <em>Ejemplo:</em> "I stayed home, <strong>for</strong> it was raining." (Me quedé en casa porque estaba lloviendo.)
        </li>
        <li><strong>And</strong>: Añade información o conecta ideas similares. <br />
          <em>Ejemplo:</em> "She likes coffee, <strong>and</strong> she likes tea." (A ella le gusta el café y el té.)
        </li>
        <li><strong>Nor</strong>: Presenta dos opciones negativas. <br />
          <em>Ejemplo:</em> "He does not drink alcohol, <strong>nor</strong> does he smoke." (Él no bebe alcohol ni fuma.)
        </li>
        <li><strong>But</strong>: Muestra contraste o una idea opuesta. <br />
          <em>Ejemplo:</em> "I wanted to go, <strong>but</strong> I was too tired." (Quería ir, pero estaba muy cansado.)
        </li>
        <li><strong>Or</strong>: Presenta una elección o alternativa. <br />
          <em>Ejemplo:</em> "Do you want tea <strong>or</strong> coffee?" (¿Quieres té o café?)
        </li>
        <li><strong>Yet</strong>: Indica contraste o una excepción inesperada. <br />
          <em>Ejemplo:</em> "She is shy, <strong>yet</strong> she loves public speaking." (Es tímida, pero le encanta hablar en público.)
        </li>
        <li><strong>So</strong>: Muestra una consecuencia o resultado. <br />
          <em>Ejemplo:</em> "I was hungry, <strong>so</strong> I ate something." (Tenía hambre, así que comí algo.)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2. Conjunciones Subordinadas (Subordinating Conjunctions)</h2>
      <p className="text-gray-700 mb-4">
        Las conjunciones subordinadas conectan una oración subordinada con una oración principal. Estas conjunciones indican relaciones de causa, tiempo, condición, entre otras.
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Because</strong>: Muestra una razón o causa. <br />
          <em>Ejemplo:</em> "I left early <strong>because</strong> I had a meeting." (Me fui temprano porque tenía una reunión.)
        </li>
        <li><strong>Although</strong>: Introduce una idea opuesta. <br />
          <em>Ejemplo:</em> "She went out <strong>although</strong> it was raining." (Ella salió aunque estaba lloviendo.)
        </li>
        <li><strong>If</strong>: Expresa una condición. <br />
          <em>Ejemplo:</em> "Call me <strong>if</strong> you need help." (Llámame si necesitas ayuda.)
        </li>
        <li><strong>When</strong>: Se refiere a un tiempo específico. <br />
          <em>Ejemplo:</em> "I will call you <strong>when</strong> I arrive." (Te llamaré cuando llegue.)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Conjunciones Correlativas (Correlative Conjunctions)</h2>
      <p className="text-gray-700 mb-4">
        Las conjunciones correlativas funcionan en pares, conectando dos partes de la oración que tienen una relación estrecha.
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Either... or</strong>: Presenta dos alternativas. <br />
          <em>Ejemplo:</em> "You can have <strong>either</strong> tea <strong>or</strong> coffee." (Puedes tomar té o café.)
        </li>
        <li><strong>Neither... nor</strong>: Presenta dos opciones negativas. <br />
          <em>Ejemplo:</em> "<strong>Neither</strong> John <strong>nor</strong> Mary came to the party." (Ni John ni Mary vinieron a la fiesta.)
        </li>
        <li><strong>Both... and</strong>: Presenta dos elementos en conjunto. <br />
          <em>Ejemplo:</em> "She is <strong>both</strong> intelligent <strong>and</strong> hardworking." (Ella es tanto inteligente como trabajadora.)
        </li>
      </ul>
    </div>
  );
};

export default Conjunctions;
