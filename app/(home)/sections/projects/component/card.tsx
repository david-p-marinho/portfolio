import SlideProps from "@/types/slideProps";
import Link from "next/link";

export default function Card({title, resume, img, repository, link}: SlideProps) {
    return(
        <div className="flex-[0_0_100%] min-w-0">
            <div style={{ backgroundImage: `url('/${img}.png')` }} className="w-full h-[350px] bg-cover bg-center relative rounded-md mb-5">
                <div className="absolute bottom-[0] w-full h-[150px] bg-[#00000070] text-white px-2 py-1">
                    <p className="text-center font-bold text-[16px]">{title}</p>
                    <p>{resume}</p>
                </div>
            </div>

            <div className="flex justify-evenly items-center">
                <Link className="bg-[#304E8A] text-white rounded-full px-5 py-3 shadow-md" href={""}>Testar site</Link>
                <Link className="bg-[#304E8A] text-white rounded-full px-5 py-3 shadow-md" href={""}>Ver Respositorio</Link>
            </div>
        </div>
    )
}