import Image from "next/image";

export default function Card({ link }: { link: string }) {
    return (
        <div className="relative h-full w-full min-h-[500px]">
            <Image 
                className="object-contain rounded-2xl" 
                src={link} 
                alt="Projeto"
                fill
                sizes="50vw"
                priority
            />
        </div>
    );
}