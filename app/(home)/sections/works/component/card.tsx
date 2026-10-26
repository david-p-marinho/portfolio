import WorkProps from "@/types/workProps";
import { iconMap } from "@/utils/iconMap";
import { RiGlobalLine, RiQuestionLine } from "react-icons/ri";

export default function Card({title, icon, resume}: WorkProps) {
    const WorkIcon = iconMap[icon] || RiQuestionLine
    return (
        <div className="w-[300px] bg-[#2D87AD] flex flex-col items-center px-3 py-3 rounded-md">
            <WorkIcon className="w-[30px] h-[30px] my-5 text-[#52B8E3]" />
            <h3 className="text-[16px] font-bold mb-2 text-white">{title}</h3>
            <p className="text-[14px] text-white">{resume}</p>
        </div>
    )
}