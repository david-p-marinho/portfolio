import { ElementType } from "react";
import { RiJavascriptLine, RiNextjsLine, RiReactjsLine, RiHtml5Line, RiCss3Line, RiTailwindCssLine, RiFigmaLine, RiReactjsFill, RiFirebaseLine, RiAngularjsLine, RiSmartphoneFill, RiGlobalFill, RiPencilRuler2Fill } from "react-icons/ri";


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
    angular: RiAngularjsLine,
    web: RiGlobalFill,
    mobile: RiSmartphoneFill,
    design: RiPencilRuler2Fill 
}