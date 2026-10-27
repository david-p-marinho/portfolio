import Image from "next/image";
import TechList from "./component/techList";

export default function Tech() {
    return (
        <div className="w-full h-screen py-10 flex flex-col items-center gap-4">
            <h2 className="subtitle">03 / Tecnologias que uso</h2>

            <TechList/>
        </div>
    )
}