// components/welcome.js
import { useEffect, useState } from 'react';

const Welcome = () => {
  const sentences = [
    "¡Gracias por venir! Pero no te preocupes, aquí la paso de muerte… ¡literalmente!",
    "¿Qué? ¿Me trajiste flores? Mejor una taquiza, ¿no?",
    "¡Uy, qué bueno verte! Pero no te quedes mucho... ¡no vaya a ser que te quedes conmigo!",
    "Sigo esperando que me lleguen los memes... ¡y nada!",
    "Aquí el wifi está malísimo, pero el descanso eterno es top.",
    "¿Vienes a platicar? Genial, ¡porque aquí todos se quedan callados!",
    "¡Qué bueno que vienes! Pero no te pongas cómodo, no es Airbnb.",
    "Tanto tiempo para descansar y yo sin Netflix... ¡qué tragedia!",
    "Ya descansé bastante, ahora me toca parrandear con los que vienen.",
    "¡No te preocupes, aquí estamos todos en los huesos, pero el humor nunca muere!",
    "¡Ey, no llores! ¡Aquí andamos puro cotorreo!",
    "¿Te asusté? ¡Pues espérate al Día de Muertos, ahí es cuando la fiesta empieza!",
    "¿Me traes una chela o te mando una visita nocturna?",
    "No creas que estoy solo... ¡tengo toda una pandilla de calacas para la fiesta!",
    "¡Aquí me quedo, pero tú mejor que sigas disfrutando de los tamales!",
    "Si me sacas a pasear, te cuento historias de ultratumba.",
    "No vine para asustarte, pero cuidado, mis vecinos son un poco traviesos.",
    "¡Ojalá hubieras venido antes! Aquí los días son... ¡eternos!",
    "Tranquilo, aquí no tengo prisa. ¡Yo ya estoy en la eternidad!",
    "¡Vine a saludar! Pero no te apures, que no te espero pronto por acá."
  ];

  const [sentence, setSentence] = useState('');

  useEffect(() => {
    // Selecciona una frase aleatoria al cargar el componente
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    setSentence(randomSentence);
  }, []);

  return (
    <div className="p-4 bg-yellow-100 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold text-gray-800 mb-4">¡Bienvenido!</h1>
      <p className="text-gray-700">{sentence}</p>
    </div>
  );
};

export default Welcome;
