import { RiArrowRightSLine, RiMoreFill } from "react-icons/ri";
import Tags from "./tags";
import ProjectProps from "@/types/projectProps";
import TechProps from "@/types/techProps";
import Link from "next/link";

export default function MobileCard({ project, techList }: { project: ProjectProps, techList: TechProps[] }) {
    return (
        <Link href={`/projeto/${project.id}`} className="w-full min-w-0 h-[135px] relative px-2 py-2 bg-[#ABCDD1] rounded-md mx-2 shadow-md">
            <p className="text-center text-lg text-[#1575B0] font-bold">{project.title}</p>
            <p className="text-[12px] w-[90%]">{project.resume}</p>
            <div className="flex gap-6 w-full justify-center mt-5">
                <div className="flex gap-4 items-center scale-75">
                    {project.tags.slice(0, 3).map((number, index) => (
                        <Tags key={index} name={techList[number].name} color={techList[number].color} />
                    ))}
                    {
                        project.tags.length > 3 && (
                            <div className="rounded-full h-[30px] w-[30px] bg-black flex justify-center items-center">
                                <RiMoreFill className="text-white text-15" />
                            </div>
                        )
                    }
                </div>
            </div>
            
            <RiArrowRightSLine className="text-[24px] text-[#1575B0] absolute right-5 top-1/2 -translate-y-1/2 " />
        </Link>
    )
}