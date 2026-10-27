import { useEffect, useState, useRef } from "react";
import getProjects from "@/utils/getProjects";
import ProjectProps from "@/types/projectProps";
import TechProps from "@/types/techProps";
import getTech from "@/utils/getTech";
import ProjectDesktop from "./variants/projectDesktop";
import ProjectSelector from "./component/projectSelector";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [activeProject, setActiveProject] = useState<null | ProjectProps>(null)
    const [techList, setTechList] = useState<TechProps[]>([])
    

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
        <div className="flex flex-col w-full gap-4 px-5 items-center h-fit py-10 relative">
            <h2 className="subtitle">01 / PORTFÓLIO</h2>
            <ul className="w-full">
                {
                    activeProject != null && (
                        <ProjectDesktop activeProject={activeProject} techList={techList} />
                    )
                }
            </ul> 
            
            <div className="absolute bottom-5">
                <ProjectSelector projects={projects} setActiveProject={setActiveProject} activeProject={activeProject}/>
            </div>
        </div>
    );
}