"use client"
import Image from "next/image";
import Link from "next/link";
import PresentImg from "../../public/presenteTense.avif";
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

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

          <code className="font-mono font-bold">

            {
              theme.colors.lang === 'en'
                ?
                <h1>The time to learn is now in this era of artificial intelligence. It's urgent to develop the ability to read, write, and apply everything AI provides. Don't fall behind, the future is in your hands!</h1>
                :
                <h1>Ha llegado el momento de aprender en esta era de la inteligencia artificial. Es urgente que desarrolles la habilidad de leer, escribir y aplicar todo lo que la IA te ofrece. No te quedes atrás, ¡el futuro está en tus manos!</h1>
            }



          </code>

          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* By{" Tech"} */}
              {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          OBSON ELC xxxxx
          {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <Link
            href="/present"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Present</h2>
            

            {
                theme.colors.lang === 'en'
                  ?
                  <h1>
Discover the power of communicating in English using the present tense and transform the way you express yourself today.</h1>
                  :
                  <h2>Descubre el poder de comunicarte en inglés utilizando el tiempo presente y transforma tu manera de expresarte hoy.</h2>
              }
              
            
          </Link>

          <Link
            href="/past"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Past</h2>
            

            {
                theme.colors.lang === 'en'
                  ?
                  <h1>Discover the power of communicating in English using the past tense and transform the way you express yourself today.</h1>
                  :
                  <h2>Descubre el poder de comunicarte en inglés utilizando el tiempo pasado y transforma tu manera de expresarte hoy.</h2>
              }
              
            
          </Link>

          <Link
            href="/future"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Future</h2>
            
            {
                theme.colors.lang === 'en'
                  ?
                  <h1>Discover the power of communicating in English using the future tense and transform the way you express yourself today.</h1>
                  :
                  <h2>Descubre el poder de comunicarte en inglés utilizando el tiempo futuro y transforma tu manera de expresarte hoy.</h2>
              }

              
            
          </Link>

          <Link
            href="/html"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">HTML</h2>
            
              {
                theme.colors.lang === 'en'
                  ?
                  <h1>Learning HTML is key today because it is the foundation of the entire web. It allows you to customize content, improve your online presence, and opens up opportunities in a digital world.</h1>
                  :
                  <h2>Aprender HTML es clave hoy porque es la base de toda web. Te permite personalizar contenido, mejorar tu presencia en línea y abre oportunidades en un mundo digital.</h2>
              }

              
            
          </Link>
        </div>
      </main>

    </>


  );
}

