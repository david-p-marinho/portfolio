import ProjectProps from "@/types/projectProps";
import getProjects from "@/utils/getProjects";
import { useEffect, useState } from "react";

export default function Project({ params }: { params: number }) {
    const [project, setProject] = useState<ProjectProps>();

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            const target = data.find((project) => project.id == params)
            setProject(target);
        }
        loadProjects();
    }, []);

    return (
        <div>
            {
                project && (
                    <div>
                        <h1>{project.title}</h1>

                        <p>{project.info}</p>
                    </div>
                )
            }
        </div>
    )
}