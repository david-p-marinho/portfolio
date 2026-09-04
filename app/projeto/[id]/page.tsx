'use client'

import ProjectProps from "@/types/projectProps";
import getProjects from "@/utils/getProjects";
import { useEffect, useState, use } from "react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Projeto({ params }: PageProps) {
    const resolvedParams = use(params);
    const id = Number(resolvedParams.id);

    const [project, setProject] = useState<ProjectProps>();

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            const target = data.find((p) => p.id === id);
            setProject(target);
        }
        loadProjects();
    }, [id]);

    return (
        <div>
            {project && (
                <div>
                    <h1>{project.title}</h1>
                    <p>{project.info}</p>
                </div>
            )}
        </div>
    );
}