import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import About from "./sections/about/section";
import Projects from "./sections/projects/page";

export default function Home() {
    return (
        <main className="flex flex-col items-center pt-20 bg-[#20345C]">
            <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
                <RiUserLine className="text-[#0A2947] w-[60px] h-[60px]" />
            </div>

            <div className="mt-5 mb-20 text-white flex flex-col items-center">
                <h1 className="text-[24px] font-bold ">David Pequeno Marinho</h1>
                <p className="text-[14px] tracking-wider text-white">Desenvolvedor Web | Mobile</p>
            </div>

            <div className="bg-white rounded-3xl rounded-b-none w-full px-5 py-5">
                <About/>

                <Projects/>
            </div>
        </main>
    );
}
