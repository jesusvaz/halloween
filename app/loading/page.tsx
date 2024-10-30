"use client";
import Image from "next/image";
import Link from "next/link";
import Bienvenido from "../components/bienvenidaRaondom"; // Asegúrate de que este componente esté bien escrito

export default function Landing() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <code className="font-mono font-bold"></code>

          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>

        {/* Contenedor para el texto "Día de los Muertos" y la imagen */}
        <div className="flex flex-col items-center space-y-4">
          {/* Texto "Día de los Muertos" */}
          <h1 className="text-4xl font-extrabold text-center tracking-widest">
            D Í A &nbsp; D E &nbsp; L O S &nbsp; M U E R T O S
          </h1>

          {/* Imagen */}
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/diDeMuertos.jpeg"
            alt="dia de los muertos"
            width={200}
            height={200} // Cambié el tamaño para hacer la imagen cuadrada y más visible
            priority
          />

          {/* Componente de bienvenida aleatoria */}
          <Bienvenido />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <Link
            href="/acnedotas"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Acnedotas</h2>
          </Link>

          <Link
            href="/fotos"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Fotos</h2>
          </Link>

          <Link
            href="/#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Videos</h2>
          </Link>

          <Link
            href="/#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Gustos</h2>
          </Link>
        </div>
      </main>
    </>
  );
}
