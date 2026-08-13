"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import Card from "./card"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const slides = [{title: "projeto 1", resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam", img: 'card-test', repository: '.', link: '.'}, {title: "projeto 2", resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam", img: 'card-test', repository: '.', link: '.'}]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative max-w-xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((item, index) => (
                        <Card key={index} title={item.title} resume={item.resume} img={item.img} repository={item.repository} link={item.link}/>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
                aria-label="Anterior"
            >
                <RiArrowLeftSLine />
            </button>

            <button
                onClick={scrollNext}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
                aria-label="Próximo"
            >
                <RiArrowRightSLine />
            </button>
        </div>
    )
}