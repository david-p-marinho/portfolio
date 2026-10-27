import TechProps from "@/types/techProps";
import { iconMap } from "@/utils/iconMap";
import { RiQuestionLine } from "react-icons/ri";

export default function TechCards({logo, name, color}: TechProps) {
    const LogoIcon = iconMap[logo] || RiQuestionLine

    return(
        <div style={{'--main-color': color} as React.CSSProperties} className="w-[100px] h-[150px] bg-[#1A0922] shadow-md rounded-md flex justify-center items-center border border-[var(--main-color)] hover:bg-[var(--main-color)] hover:border-none hover:shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-md hover:cursor-pointer group">
            <LogoIcon style={{'--active-color': color == "#ffffff" ? "#000000": "#ffffff"} as React.CSSProperties} className="w-[30px] h-[30px] text-[var(--main-color)] group-hover:text-[var(--active-color)] transition-colors"/>

            <p className="hidden absolute bottom-5 text-[var(--active-color)] font-bold group-hover:block">{name}</p>
        </div>
    )
}