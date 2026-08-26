import TechProps from "@/types/techProps";
import { iconMap } from "@/utils/iconMap";
import { RiQuestionLine } from "react-icons/ri";

export default function Card({name, color}: TechProps) {
    const LogoIcon = iconMap[name] || RiQuestionLine

    return(
        <div className="w-[50px] h-[50px] rounded-full bg-red-400 flex justify-center items-center">
            <LogoIcon className="w-[30px] h-[30px] text-black"/>
        </div>
    )
}