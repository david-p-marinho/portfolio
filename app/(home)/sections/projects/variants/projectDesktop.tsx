import { AnimatePresence, motion } from "framer-motion";
import Carousel from "../component/carousel";
import ProjectProps from "@/types/projectProps";
import TechProps from "@/types/techProps";
import Tags from "../component/tags";
import ActionBtn from "../component/actionBtn";
import { RiGithubLine, RiGlobalLine } from "react-icons/ri";

export default function ProjectDesktop({ activeProject, techList }: { activeProject: ProjectProps, techList: TechProps[] }) {
    return (
        <div className="flex flex-col items-center w-full justify-between h-[650px]">
            <div className="flex justify-between w-full">
                <div className="w-1/2">
                    <AnimatePresence mode="popLayout">
                        <motion.div key={activeProject.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                            <div className="flex items-center gap-4">
                                <h2 className="text-5xl font-bold leading-tight text-[#189CC9]">{activeProject.title}</h2>
                            </div>
                            <p className="mt-4 text-white max-w-lg text-md whitespace-pre-line">{activeProject.info}</p>

                            {
                                techList && (
                                    <div className="mt-10 w-fit">
                                        <p className="text-center font-bold mb-5">Tecnologias usadas</p>
                                        <div className="flex gap-4 items-center">
                                            {activeProject.tags.map((number, index) => (
                                                <Tags key={index} name={techList[number].name} color={techList[number].color} />
                                            ))}
                                        </div>
                                    </div>
                                )


                            }
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="w-1/2 h-[500px] overflow-hidden relative rounded-2xl">
                    <AnimatePresence mode="popLayout">
                        <motion.div key={activeProject.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0 h-full w-full rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                            <Carousel project={activeProject.imgs} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex gap-8 mb-10">
                {
                    activeProject.links.map((item) => (
                        <ActionBtn key={item.id} link={item.link} name={item.label} iconKey={item.iconKey} />
                    ))
                }
            </div>
        </div>
    )
}