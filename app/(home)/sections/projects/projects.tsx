import { useEffect, useState, useRef } from "react";
import getProjects from "@/utils/getProjects";
import ProjectProps from "@/types/projectProps";
import TechProps from "@/types/techProps";
import getTech from "@/utils/getTech";
import ProjectDesktop from "./variants/projectDesktop";
import ProjectMobile from "./variants/projectMobile";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [techList, setTechList] = useState<TechProps[]>([])
    const isAnimating = useRef<boolean>(false);

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            setProjects(data);
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

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (isAnimating.current || projects.length === 0) return;

        if (e.deltaY > 0 && currentIndex < projects.length - 1) {
            isAnimating.current = true;
            setCurrentIndex((prev) => prev + 1);

            setTimeout(() => {
                isAnimating.current = false;
            }, 400);
        }
        else if (e.deltaY < 0 && currentIndex > 0) {
            isAnimating.current = true;
            setCurrentIndex((prev) => prev - 1);

            setTimeout(() => {
                isAnimating.current = false;
            }, 400);
        }
    };

    const activeProject = projects[currentIndex];

    return (
        <div onWheel={handleWheel} className="md:pr-8 flex flex-col w-full items-center h-full py-10 select-none">
            <span className="text-[#189CC9] font-mono text-sm block font-bold mb-20">01 / PORTFÓLIO</span>
            {activeProject && (
                <>
                    <div className="hidden md:block w-full h-screen">
                        <ProjectDesktop activeProject={activeProject} techList={techList} />
                    </div>

                    <div className="md:hidden w-full">
                        <ProjectMobile projectList={projects} techList={techList} />
                    </div>

                </>
            )}
        </div>
    );
}