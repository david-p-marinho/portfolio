import path from "path";
import { promises as fs } from "fs";
import ProjectProps from "@/types/projectProps";
import projectData from "@/data/projects.json"

const getProjects = async(): Promise<ProjectProps[]> => {
    return projectData as ProjectProps[];
}

export default getProjects