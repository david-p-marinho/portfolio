import { ProjectIconMap } from "@/utils/projectIconMap"
import { RiQuestionLine } from "react-icons/ri"

export default function ActionBtn({ link, name, iconKey }: { link: string, name: string, iconKey: string }) {
    const [IconLine, IconFill] = ProjectIconMap[iconKey] || [RiQuestionLine, RiQuestionLine]

    return (
        <a href={link} className="bg-[#189CC9] w-12.5 h-12.5 flex justify-center items-center rounded-full text-white group hover:bg-[#2D87AD] hover:scale-125 transition-all duration-300">
            <IconLine size={24} className="opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90 transition-all duration-300 ease-in-out" />
            <IconFill size={24} className="absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ease-in-out"/>

        </a>
    )
}