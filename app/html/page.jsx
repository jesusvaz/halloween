import Image from "next/image";
import Selection from "../components/sel";
import HtmlImg from "../../public/htmlEra.avif";

export default function Home() {
    return (
        <main className="items-center  p-24">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-3/4">

                <div class="w-1/2 p-2">
                    <Image
                        src={HtmlImg}
                        alt="Teacher Logo"
                        className="rounded-md"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                <div class="w-1/2 flex items-end p-10 bg-gray-50">
                    <h1 class="text-4xl font-bold text-gray-800">HTML</h1>
                </div>
            </div>


            <div class="bg-black text-white p-4 mt-4 rounded-lg w-3/4 flex justify-center">
                <p class="m-0 max-w-[30ch]">
                    <i class="text-left block">
                        Hypetext es el nuevo ABC de la era de la inteligencia artificial. Aprende a escribir Hoy.
                        <br />
                        {/* Iré a la tienda mañana. */}
                    </i>
                </p>
            </div>
            <div className={`m-0 max-w-[30ch] text-sm opacity-50 p-0.5`} >
                <h1>Escoge una etiqueta para ver su uso</h1>
                <div><Selection /></div>
            </div>

        </main>
    );
}