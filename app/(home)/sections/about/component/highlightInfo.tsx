import { RiJavascriptLine, RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import FrameWorkCard from "./frameworkCard";
import List from "./list";

export default function HighLightInfo() {
    return(
        <div className="w-full bg-[#0A2947] text-white my-5 rounded-md px-3 py-5">
            <div className="w-full mb-15">
                <h3 className="text-center text-[20px] font-bold">Feramentas que uso</h3>

                <div className="flex justify-evenly items-center w-full">
                    <FrameWorkCard title={"JavaScript"} icon={<RiJavascriptLine className="w-[25px] h-[25px]" />}/>
                    <FrameWorkCard title={"React"} icon={<RiReactjsLine className="w-[25px] h-[25px]"/>}/>
                    <FrameWorkCard title={"NextJs"} icon={<RiNextjsLine className="w-[25px] h-[25px]"/>}/>
                    <FrameWorkCard title={"Tailwind"} icon={<RiTailwindCssFill className="w-[25px] h-[25px]"/>}/>
                </div>
            </div>

            <div className="mb-15">
                <List title={"Habilidades"} content={["Comunicação Assertiva", "Resolução de Problemas", "Trabalho em Equipe", "Proatividade"]}/>
            </div>

            <List title={"Habilidades"} content={["Ingles - Avançado", "Frances - Intermediario"]}/>
        </div>
    )
}