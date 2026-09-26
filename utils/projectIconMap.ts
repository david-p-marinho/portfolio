import { ElementType } from "react";

import { RiGlobalLine, RiGithubLine, RiFigmaLine, RiGithubFill, RiGlobalFill, RiFigmaFill } from "react-icons/ri";

export const ProjectIconMap: Record<string, ElementType[]> = {
    github: [RiGithubLine, RiGithubFill],
    web: [RiGlobalLine, RiGlobalFill],
    figma: [RiFigmaLine, RiFigmaFill]
}