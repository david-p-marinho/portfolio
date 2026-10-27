import { ProjectIconMap } from "@/utils/projectIconMap"
import { RiQuestionLine } from "react-icons/ri"

export default function ActionBtn({ link, name, iconKey }: { link: string, name: string, iconKey: string }) {
    const [IconLine, IconFill] = ProjectIconMap[iconKey] || [RiQuestionLine, RiQuestionLine]

    return (
        <a href={link} className="btn">
            <IconLine size={24}/>
            <p>{name}</p>
        </a>
    )
}