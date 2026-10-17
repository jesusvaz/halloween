import fs from "fs"
import path from "path"
import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const dynamic = "force-dynamic"

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i

function getFotos() {
    const publicDir = path.join(process.cwd(), "public")
    return fs
        .readdirSync(publicDir)
        .filter((file) => IMAGE_EXTENSIONS.test(file))
        .sort()
}

export default function Pictures() {
    const fotos = getFotos()

    return (

        <>
            <div className="flex h-dvh flex-col items-center justify-center overflow-hidden p-4 sm:p-8">
                <div className="text-xl font-bold mb-4">
                     <h1>Fotos</h1>
                </div>

                {fotos.length === 0 ? (
                    <p>No hay fotos.</p>
                ) : (
                    <Carousel opts={{ loop: true }} className="w-full max-w-5xl">
                        <CarouselContent>
                            {fotos.map((foto) => (
                                <CarouselItem key={foto}>
                                    <div className="relative h-[calc(100dvh-8rem)] w-full overflow-hidden rounded-lg bg-black">
                                        <Image
                                            src={`/${foto}`}
                                            alt={foto}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                            className="object-contain"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 sm:-left-12" />
                        <CarouselNext className="right-2 sm:-right-12" />
                    </Carousel>
                )}
            </div>
        </>
    )
}
