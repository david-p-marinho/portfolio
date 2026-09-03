import TechProps from "@/types/techProps";
import { iconMap } from "@/utils/iconMap";
import { RiQuestionLine } from "react-icons/ri";

export default function TechCards({logo, name, color}: TechProps) {
    const LogoIcon = iconMap[logo] || RiQuestionLine

    return(
        <div style={{'--main-color': color} as React.CSSProperties} className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[var(--main-color)] hover:bg-[var(--main-color)] hover:border-none transition-all duration-300 hover:scale-110 hover:shadow-md hover:cursor-pointer group">
            <LogoIcon className="w-[30px] h-[30px] text-[var(--main-color)] group-hover:text-white transition-colors"/>
     
        </div>
    )
}