import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import getProjects from "@/utils/getProjects";
import ProjectProps from "@/types/projectProps";
import Carousel from "./component/carousel";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const isAnimating = useRef<boolean>(false);

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            setProjects(data);
        }
        loadProjects();
    }, []);

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
        <div onWheel={handleWheel} className="pr-8 flex flex-col w-full items-center h-full py-10 select-none">
            <span className="text-[#189CC9] font-mono text-sm block font-bold mb-20">01 / PORTFÓLIO</span>
            {activeProject && (
                <div className="flex justify-between w-full">
                    <div className="w-1/2">
                        <AnimatePresence mode="popLayout">
                            <motion.div key={activeProject.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <h2 className="text-5xl font-bold leading-tight text-[#189CC9]">{activeProject.title}</h2>
                                <p className="mt-4 text-gray-600 max-w-md text-lg whitespace-pre-line">{activeProject.resume}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-1/2 h-[500px] overflow-hidden relative rounded-2xl">
                        <AnimatePresence mode="popLayout">
                            <motion.div key={activeProject.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0 h-full w-full rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                <Carousel project={activeProject.imgs}/>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
}