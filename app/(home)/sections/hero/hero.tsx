import Image from "next/image";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

export default function Hero() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="glass-effect flex flex-col md:flex-row-reverse items-center justify-center px-5 py-5">
                <div className="relative md:w-[250px] md:h-[250px] w-[150px] h-[150px]">
                    <Image fill className="rounded-full object-cover" sizes="250px" src={"/portrait.jpg"} alt={""} />
                </div>

                <div className="text-white flex flex-col items-center mx-5 h-50 justify-between">
                    <div className="text-center">
                        <h1 className="font-pixel drop-shadow-[2px_2px_0_#1B2A4A] drop-shadow-[2px_2px_0_#189CC9] text-lg md:text-3xl font-bold ">DAVID PEQUENO MARINHO</h1>
                        <p className="text-md md:text-lg text-md tracking-wider mb-10 font-bold">Desenvolvedor Web | Mobile</p>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Link href={""}>
                            <div className="btn">
                                <RiGithubLine className="h-[26px] w-[26px]" />
                                <p className="text-[16px] font-bold">GitHub</p>
                            </div>
                        </Link>

                        <Link href={""}>
                            <div className="btn">
                                <RiLinkedinBoxLine className="h-[26px] w-[26px]" />
                                <p className="text-[16px] font-bold">LinkedIn</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}