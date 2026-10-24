import { ProjectIconMap } from "@/utils/projectIconMap"
import { RiQuestionLine } from "react-icons/ri"

export default function ActionBtn({ link, name, iconKey }: { link: string, name: string, iconKey: string }) {
    const [IconLine, IconFill] = ProjectIconMap[iconKey] || [RiQuestionLine, RiQuestionLine]

    return (
        <a href={link} className="bg-[#189CC9] w-[150px] gap-2 h-[40px] flex justify-center items-center rounded-md text-white group hover:bg-[#2D87AD] hover:scale-125 transition-all duration-300">
            <IconLine size={24}/>
            <p>{name}</p>
        </a>
    )
}