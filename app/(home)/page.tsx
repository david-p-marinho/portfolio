import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import About from "./sections/about/section";

export default function Home() {
    return (
        <main className="flex flex-col items-center pt-50 px-5">
            <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
                <RiUserLine className="text-[#0A2947] w-[60px] h-[60px]" />
            </div>

            <div className="mt-5 mb-20">
                <h1 className="text-[24px] text-[#0A2947] font-bold ">David Pequeno Marinho</h1>
                <p className="text-[14px] tracking-wider">Desenvolvedor Web | Mobile</p>
            </div>

            <About/>
        </main>
    );
}
