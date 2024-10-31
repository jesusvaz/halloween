"use client";

 import { useState, useEffect } from 'react';

 const SpanishVoices = () => {
   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
   const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

   const text = "no vine porque pude sino porque pude vine";

   // Load Spanish voices when component mounts
   useEffect(() => {
     if ('speechSynthesis' in window) {
       const loadVoices = () => {
         const allVoices = window.speechSynthesis.getVoices();
         const spanishVoices = allVoices.filter((voice) => voice.lang.startsWith('es'));
         setVoices(spanishVoices);

         // Set default selected voice if available
         if (spanishVoices.length > 0) {
           setSelectedVoice(spanishVoices[0]);
         }
       };

       loadVoices();
       window.speechSynthesis.onvoiceschanged = loadVoices;
     }
   }, []);

   const handlePlayText = () => {
     if (selectedVoice && 'speechSynthesis' in window) {
       const utterance = new SpeechSynthesisUtterance(text);
       utterance.voice = selectedVoice;
       utterance.lang = selectedVoice.lang;
       window.speechSynthesis.speak(utterance);
     } else {
       alert('Specified voice not available or speech synthesis not supported.');
     }
   };

   return (
     <div className="flex flex-col items-center p-4">
       <h1 className="text-2xl font-bold mb-4">Voces en Español</h1>
      
       {voices.length > 0 ? (
         <div className="mb-4">
           <label htmlFor="voice-select" className="block font-semibold mb-2">Selecciona una voz:</label>
           <select
             id="voice-select"
             value={selectedVoice?.voiceURI || ""}
             onChange={(e) => {
               const selected = voices.find((voice) => voice.voiceURI === e.target.value);
               setSelectedVoice(selected || null);
             }}
             className="border p-2 rounded text-black"
           >
             {voices.map((voice) => (
               <option key={voice.voiceURI} value={voice.voiceURI}>
                 {voice.name} ({voice.lang})
               </option>
             ))}
           </select>
         </div>
       ) : (
         <p>No hay voces en español disponibles.</p>
       )}
      
       <button
         onClick={handlePlayText}
         className="bg-blue-500 text-white p-2 rounded mt-4"
         disabled={!selectedVoice}
       >
         Escuchar: "{text}"
       </button>
     </div>
   );
 };

 export default SpanishVoices;
