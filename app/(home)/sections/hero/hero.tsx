import Image from "next/image";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxLine, RiUserLine } from "react-icons/ri";
import FallingPixels from "../projects/component/FallingPixels";
import { LiquidGlassCard } from "@/components/liquidGlass";

export default function Hero() {
    const btnStyle = "w-[130px] h-[45px] bg-[#189CC9] shadow-md px-3 rounded-full flex justify-center gap-2 transition-transform duration-200 items-center text-white group hover:shadow-xl hover:scale-105 active:scale-95"

    return (
        <FallingPixels className="h-screen flex justify-center items-center">
                <LiquidGlassCard className="flex flex-col md:flex-row-reverse items-center justify-center px-5 py-5">
                    <div className="relative md:w-[250px] md:h-[250px] w-[150px] h-[150px]">
                        <Image fill className="rounded-full object-cover" src={"/portrait.jpg"} alt={""} />
                    </div>

                    <div className="text-white flex flex-col items-center mx-5 h-[200px] justify-between">
                        <div className="text-center">
                            <h1 className="text-xl md:text-3xl font-bold ">David Pequeno Marinho</h1>
                            <p className="text-md md:text-lg text-md tracking-wider mb-10 font-bold">Desenvolvedor Web | Mobile</p>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <Link href={""}>
                                <div className={btnStyle}>
                                    <RiGithubLine className="h-[26px] w-[26px]" />
                                    <p className="text-[16px] font-bold">GitHub</p>
                                </div>
                            </Link>

                            <Link href={""}>
                                <div className={btnStyle}>
                                    <RiLinkedinBoxLine className="h-[26px] w-[26px]" />
                                    <p className="text-[16px] font-bold">LinkedIn</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </LiquidGlassCard>

        </FallingPixels>
    )
}