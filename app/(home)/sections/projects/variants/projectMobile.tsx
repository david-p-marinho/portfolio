import ProjectProps from "@/types/projectProps";
import TechProps from "@/types/techProps";
import MobileCard from "../component/mobileCard";

export default function ProjectMobile({projectList, techList}: {projectList: ProjectProps[], techList: TechProps[]}) {
    return(
        <ul className="w-full">
            {
                projectList.map((project) => (
                    <li className="flex justify-center items-center mb-5 w-full">
                        <MobileCard project={project} techList={techList}/>
                    </li>
                ))
            }
        </ul>
    )
}