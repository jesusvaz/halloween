"use client"
import Image from "next/image";
import PastImg from "../../public/futureTense.avif";
import FutureTensePrhases from "@/app/components/futuretensephrases";

/// se especifica que el componente es tipo client
import { useTheme } from "../components/theme-provider";
/// se exporta hook useTheme
export default function ClientRoutPresent() {
    /// se inicializa la vriable tipo theme
    const theme = useTheme();
    return (
        <>
        {/* <h1
         style={{ color: theme.colors.terciary }}
         >Presente</h1>
        <h1>Present</h1>
        
        {theme.colors.lang === 'en'?<h1>English</h1>:<h1>Español</h1>} */}
        
        <main className="items-center  p-24">
        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-3/4">

                 <div className="w-1/2 p-2">
                     <Image
                         src={PastImg}
                         alt="Teacher Logo"
                         className="rounded-md"
                         width={200}
                         height={200}
                         priority
                     />
                 </div>

                 <div className="w-1/2 flex items-end p-10 bg-gray-50">
                     <h1 className="text-4xl font-bold text-gray-800">Future</h1>
                 </div>
             </div>


             <div className="bg-black text-white p-4 mt-4 rounded-lg w-3/4 flex justify-center">
               
                     <>
                     {theme.colors.lang === 'en'?
                      <div style={{ textAlign: 'left', width: '100%' }}>
                      
                      <div style={{ width: '100%' }}>
                      Using the future tense is crucial for expressing plans and intentions clearly and confidently. When you speak in the future, you convey a sense of anticipation and direction, allowing you to communicate your goals and predictions more effectively. This not only enhances the clarity of your forward-looking communication but also helps you share your vision and aspirations, making your ideas more engaging and inspiring to your audience.
                      </div>
                      <FutureTensePrhases/>
                  </div>
                         :
                         <div style={{ textAlign: 'left', width: '100%' }}>
                             
                              <div style={{ width: '100%' }}>
                              Usar el tiempo pasado es crucial para reflexionar sobre eventos y experiencias de manera clara y precisa. Cuando hablas en pasado, transmites una sensación de conclusión y comprensión, lo que te permite relatar tus pensamientos y acciones de manera más efectiva. Esto no solo mejora la claridad de tu comunicación, sino que también te ayuda a transmitir lecciones y recuerdos, haciendo que tus historias sean más significativas y atractivas para tu audiencia.
                              </div>
                              <FutureTensePrhases/>
                             
                          </div>
               
                         }
                    
                     </>
                    
             </div>

         </main>
     
        </>
      
        
    );
}

// import Image from "next/image";
// import PresentImg from "../../public/presenteTense.avif";

// export default function Present() {
//     return (
//         <main className="items-center  p-24">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-3/4">

//                 <div className="w-1/2 p-2">
//                     <Image
//                         src={PresentImg}
//                         alt="Teacher Logo"
//                         className="rounded-md"
//                         width={200}
//                         height={200}
//                         priority
//                     />
//                 </div>

//                 <div className="w-1/2 flex items-end p-10 bg-gray-50">
//                     <h1 className="text-4xl font-bold text-gray-800">Present</h1>
//                 </div>
//             </div>


//             <div className="bg-black text-white p-4 mt-4 rounded-lg w-3/4 flex justify-center">
               
//                     <>
//                         <div style={{ textAlign: 'left', width: '100%' }}>
//                             <b>Spanish:</b>
//                             <div style={{ width: '100%' }}>
//                                 Usar el tiempo presente es fundamental para comunicar tus ideas de manera clara y directa. Cuando hablas en presente, transmites confianza y seguridad, lo que te permite expresar tus pensamientos de manera más correcta. Esto no solo mejora la calidad de tu comunicación, sino que también te ayuda a conectar mejor con tu audiencia, haciendo que tus mensajes sean más impactantes y convincentes.
//                             </div>
//                         </div>

//                         <div style={{ textAlign: 'left', width: '100%' }}>
//                             <b>English:</b>
//                             <div style={{ width: '100%' }}>
//                                 Using the present tense is crucial for communicating your ideas clearly and directly. When you speak in the present, you convey confidence and certainty, allowing you to express your thoughts more correctly. This not only enhances the quality of your communication but also helps you connect better with your audience, making your messages more impactful and persuasive.
//                             </div>
//                         </div>
//                     </>
               
//             </div>

//         </main>
//     );
// }
