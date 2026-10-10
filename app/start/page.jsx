"use client"

/// se especifica que el componente es tipo client
export default function Start() {
    return (
        <>
        <main className="items-center  p-24">

            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-3/4">
                 <div className="w-1/2 flex items-end p-10 bg-gray-50">
                     <h1 className="text-4xl font-bold text-gray-800">Present</h1>
                 </div>
             </div>

             <div className="bg-black text-white p-4 mt-4 rounded-lg w-3/4 flex justify-center">
                 <div style={{ textAlign: 'left', width: '100%' }}>
                      <div style={{ width: '100%' }}>
                          Usar el tiempo presente es fundamental para comunicar tus ideas de manera clara y directa. Cuando hablas en presente, transmites confianza y seguridad, lo que te permite expresar tus pensamientos de manera más correcta. Esto no solo mejora la calidad de tu comunicación, sino que también te ayuda a conectar mejor con tu audiencia, haciendo que tus mensajes sean más impactantes y convincentes.
                      </div>
                  </div>
             </div>

         </main>
        </>
    );
}
