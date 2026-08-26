import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import Card from "./card"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

export default function Carousel({ project }: { project: string[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative w-full h-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {project.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                            <Card link={item} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
                aria-label="Anterior"
            >
                <RiArrowLeftSLine />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
                aria-label="Próximo"
            >
                <RiArrowRightSLine />
            </button>
        </div>
    )
}