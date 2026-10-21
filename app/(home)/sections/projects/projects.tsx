import { useEffect, useState, useRef } from "react";
import getProjects from "@/utils/getProjects";
import ProjectProps from "@/types/projectProps";
import TechProps from "@/types/techProps";
import getTech from "@/utils/getTech";
import ProjectDesktop from "./variants/projectDesktop";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [activeProject, setActiveProject] = useState<null | ProjectProps>(null)
    const [techList, setTechList] = useState<TechProps[]>([])
    const btnColor = ['#7c3aed', '#f472b6', '#38bdf8']

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            setProjects(data);
            setActiveProject(data[0])
        }
        loadProjects();
    }, []);

    useEffect(() => {
        async function loadData() {
            const data = await getTech()
            setTechList(data)
        }

        loadData()
    }, [])
    const changeProject = (project: ProjectProps) => {
        setActiveProject(project)
    }

    return (
        <div className="flex flex-col w-full gap-4 px-5 items-center h-[750px] py-10 relative">
            <span className="text-[#189CC9] font-mono text-sm block font-bold">01 / PORTFÓLIO</span>
            <ul className="w-full">
                {
                    activeProject != null && (
                        <ProjectDesktop activeProject={activeProject} techList={techList} />
                    )
                }
            </ul> 
            <div className="flex gap-4 absolute bottom-5">
                {
                    projects.map((project, index) => (
                        <div key={index} style={{backgroundColor: index == activeProject?.id ? btnColor[index]: undefined}} className={`w-[45px] h-[45px] shadow-md bg-gray-400 transition-all duration-300 ease-in-out ${index == activeProject?.id ? `rounded-[50%] bg-[${btnColor[index]}]`: 'rounded-[8px]'}`} onClick={() => changeProject(project)}/>
                    ))
                }
            </div>
        </div>
    );
}