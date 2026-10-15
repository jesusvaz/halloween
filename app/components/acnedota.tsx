"use client";

import { useEffect } from 'react';

const stories = [
    {
        title: "No vine porque pude",
        text: "no vine porque pude, sino que porque pude vine",
    },
    {
        title: "La televisión de Doña Luz",
        text: "Don Humberto, siempre atento y cariñoso, había prometido a Doña Luz que algún día le regalaría una televisión para que pudiera disfrutar de sus programas favoritos en casa. A pesar de las limitaciones económicas y el esfuerzo que implicaba, no perdió la ilusión de cumplir su promesa. Fue ahorrando pacientemente y, en cuanto tuvo el dinero suficiente, se dirigió con determinación a la tienda. Con una sonrisa de satisfacción, adquirió la televisión que tanto deseaba Doña Luz y se la llevó a casa, complaciéndola de una manera especial y llenando de alegría su hogar.",
    },
    {
        title: "Una familia de doce",
        text: "Don Humberto, con una dedicación incansable y un espíritu de sacrificio admirable, logró mantener a su gran familia de doce miembros, donde cada uno encontraba su manera de aportar al hogar. Beatriz, la mayor, siempre ayudaba a cuidar de los más pequeños, mientras que Humberto y Deisy trabajaban en cuanto podían, encontrando empleos que les permitieran contribuir con los gastos familiares. Carmen, José y Alfredo también buscaban trabajos para apoyar en casa, aprendiendo desde jóvenes la importancia de ganarse la vida. Ana y Toña, con su energía, realizaban labores que aligeraban el peso de su padre. Marissa, Lola, Pablo y Álvaro, aunque los más pequeños, crecieron rodeados de este esfuerzo colectivo, inspirados por el ejemplo de cada hermano. Así, Don Humberto, junto a sus hijos, construyó un hogar donde el trabajo y el compromiso les permitieron salir adelante, enfrentando cada reto unidos y determinados a superar las dificultades.",
    },
    {
        title: "El ñañaña de Tío Pablo",
        text: "Tío Pablo tenía una manera única de jugar con sus sobrinos: los “torturaba” con cosquillas y juegos de manos que, aunque los hacían retorcerse y gritar de risa, todos disfrutaban a su manera. Con su característico “ñañaña” —ese sonido misterioso que usaba justo antes de lanzarse hacia ellos— lograba que todos se pusieran en guardia, tratando de prever el momento en que su tío los atraparía para comenzar su “tortura” de risas. Los años pasaron y, aunque todos mantenían en su memoria esos juegos inolvidables, para Chuy tuvieron que pasar 45 años antes de encontrar la oportunidad perfecta para vengarse de aquellas cosquillas y sustos que su tío Pablo le había dado. Fue entonces cuando, con una sonrisa pícara, Chuy finalmente se cobró aquella vieja deuda, recordando los momentos que hicieron de la niñez algo tan divertido y especial.",
    },
    {
        title: "El consuelo en la plataforma",
        text: "Alfredo y José trabajaron durante años en plataformas, donde más de una vez se echaron unas buenas risas al recordar sus aventuras y el inesperado consuelo que encontraron… aunque no precisamente el consuelo emocional que esperaban. Resulta que Consuelo era, nada menos, la novia de su Tío Pablo, quien siempre les advertía entre risas que no se metieran con ella, porque no le siguieran a Tía Olivia, su otra novia, quien no tenía paciencia para los juegos. Pero eso sí, todos sabían que si cometían algún error o quebraban algo, Tío Pablo, con su famoso ñañaña les recordaría que en ese mundo de trabajo y familia, había que cuidarse, o hasta ahí llegabas. Así, entre bromas y advertencias, Alfredo y José aprendieron a ganarse la vida en la plataforma, mientras la presencia de Tío Pablo, Consuelo y Olivia quedaba siempre en su memoria, llenándola de risas y consejos inolvidables.",
    },
    {
        title: "El nieto favorito",
        text: "Tú sabes que eres el nieto favorito Aunque Espero que pase mucho tiempo para verte aquí en el cielo.",
    },
];

const HardcodedSpanishVoice = () => {
    const handlePlayText = (textToPlay: string) => {
        if ('speechSynthesis' in window) {
            const allVoices = window.speechSynthesis.getVoices();
            const spanishVoices = allVoices.filter((voice) => voice.lang.toLowerCase().startsWith('es'));

            // Voces claras por orden de preferencia; si ninguna existe, se usa cualquier voz en español
            const preferredNames = ['Google español de Estados Unidos', 'Google español', 'Paulina', 'Mónica', 'Monica', 'Juan', 'Jorge', 'Microsoft Sabina', 'Microsoft Raul'];
            const clearVoice =
                preferredNames
                    .map((name) => spanishVoices.find((voice) => voice.name.includes(name)))
                    .find(Boolean) ??
                spanishVoices.find((voice) => voice.lang === 'es-MX') ??
                spanishVoices[0];

            window.speechSynthesis.cancel();

            // Se lee por oraciones porque Chrome corta las voces de Google en textos largos
            const sentences = textToPlay.match(/[^.!?…]+[.!?…]*/g) ?? [textToPlay];
            sentences.forEach((sentence) => {
                const utterance = new SpeechSynthesisUtterance(sentence.trim());
                if (clearVoice) {
                    utterance.voice = clearVoice;
                    utterance.lang = clearVoice.lang;
                } else {
                    utterance.lang = 'es-MX';
                }
                utterance.rate = 0.9;
                utterance.pitch = 1;
                utterance.volume = 1;
                window.speechSynthesis.speak(utterance);
            });
        } else {
            alert('Speech synthesis is not supported in this browser.');
        }
    };

    const handleStop = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    };

    useEffect(() => {
        // Preload voices (for browsers that require an initial load)
        if ('speechSynthesis' in window) {
            window.speechSynthesis.getVoices();
        }
    }, []);

    return (
        <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold mb-4">
                Etoy siempre con  ustedes
            </h3>
            {stories.map((story) => (
                <button
                    key={story.title}
                    onClick={() => handlePlayText(story.text)}
                    className="bg-blue-500 text-white p-2 rounded mt-4"
                >
                    Escuchar: {story.title}
                </button>
            ))}
            <button
                onClick={handleStop}
                className="bg-gray-500 text-white p-2 rounded mt-4"
            >
                Detener
            </button>
        </div>
    );
};

export default HardcodedSpanishVoice;
