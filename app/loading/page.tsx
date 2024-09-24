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
        Hiaki Continue Education
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
            href="/english"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Englsih</h2>


            {
              theme.colors.lang === 'en'
                ?
                <h1>
                  Mastering English opens doors in the global business world, connecting you with companies and professionals worldwide. It allows you to stand out in a competitive environment and close international deals. It’s the key to expanding your horizons and seizing endless opportunities.
                  </h1>
                :
                <h2>
                  Dominar el inglés te abre puertas en el mundo de los negocios globales, conectándote con empresas y profesionales de todo el mundo. Te permite destacar en un entorno competitivo y cerrar tratos internacionales. Es la clave para expandir tus horizontes y aprovechar oportunidades infinitas.
                  </h2>
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

          <Link
            href="/future"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">AI</h2>

            {
              theme.colors.lang === 'en'
                ?
                <h2>Mastering artificial intelligence (AI) puts you at the forefront of innovation and technology. It enables you to automate processes, enhance decision-making, and create advanced solutions. AI is the key to transforming industries and harnessing the digital future.</h2>
                :
                <h2>Dominar la inteligencia artificial (IA) te coloca a la vanguardia de la innovación y la tecnología. Te permite automatizar procesos, mejorar la toma de decisiones y crear soluciones avanzadas. La IA es la clave para transformar industrias y aprovechar el futuro digital.</h2>
            }



          </Link>

          <Link
            href="/past"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Frameworks</h2>


            {
              theme.colors.lang === 'en'
                ?
                <h2>Mastering web frameworks allows you to build efficient and scalable applications quickly. They simplify creating dynamic interfaces and enhance the user experience. Web frameworks are key to streamlining development and staying competitive in the tech world.</h2>
                :
                <h2>Dominar los frameworks web te permite desarrollar aplicaciones eficientes y escalables rápidamente. Facilitan la creación de interfaces dinámicas y mejoran la experiencia del usuario. Son la clave para agilizar el desarrollo y mantenerte competitivo en el mundo tecnológico.</h2>
            }


          </Link>

         

         
        </div>
      </main>

    </>


  );
}

