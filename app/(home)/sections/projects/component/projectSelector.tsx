import ProjectProps from "@/types/projectProps"
import { RiCircleFill, RiRocketFill, RiStarFill } from "react-icons/ri"

interface props {
    projects: ProjectProps[]
    setActiveProject: (project: ProjectProps) => void,
    activeProject: ProjectProps | null
}

export default function ProjectSelector({ projects, setActiveProject, activeProject }: props) {
    const imgStyle = 'w-full h-full p-1 text-white'
    const btnConfig = [
        { bgColor: '#E7D9FF', img: (<RiRocketFill className={imgStyle} style={{color:'#7c3aed'}}/>) }, 
        { bgColor: '#FFD9EC', img: (<RiStarFill className={imgStyle} style={{color:'#f472b6'}}/>) }, 
        { bgColor: '#D9F3FF', img: (<RiCircleFill className={imgStyle} style={{color:'#38bdf8'}}/>)}
    ]

    return (
        <div className="flex gap-4">
            {
                projects.map((project, index) => {
                    const isActive = activeProject?.id === index

                    return (
                        <button key={index} onClick={() => setActiveProject(project)}>
                            <div 
                                className={`w-[35px] h-[35px] shadow-md flex justify-center items-center transition-all duration-300 ease-in-out ${
                                    isActive ? 'rounded-[50%]' : 'rounded-[28%] bg-gray-400'
                                }`}
                                style={{ 
                                    backgroundColor: isActive ? btnConfig[index].bgColor : '#9ca3af' 
                                }}
                            >
                                <div className={`w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${
                                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                                }`}>
                                    {btnConfig[index].img}
                                </div>
                            </div>
                        </button>
                    )
                })
            }
        </div>
    )
}