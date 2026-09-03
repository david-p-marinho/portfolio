import { ElementType } from "react";
import { RiJavascriptLine, RiNextjsLine, RiReactjsLine, RiHtml5Line, RiCss3Line, RiTailwindCssLine, RiFigmaLine, RiReactjsFill, RiFirebaseLine, RiAngularjsLine } from "react-icons/ri";


export const iconMap: Record<string, ElementType> = {
    html: RiHtml5Line,
    css: RiCss3Line,
    js: RiJavascriptLine,
    react: RiReactjsLine,
    tailwind: RiTailwindCssLine,
    next: RiNextjsLine,
    figma: RiFigmaLine,
    reactNative: RiReactjsFill,
    firebase: RiFirebaseLine,
    angular: RiAngularjsLine 
}