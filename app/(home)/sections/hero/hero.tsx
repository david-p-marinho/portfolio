import Image from "next/image";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxLine, RiUserLine } from "react-icons/ri";

export default function Hero() {
    const btnStyle = "bg-[#189CC9] shadow-md px-3 py-2 rounded-full flex justify-center transition-transform duration-200 items-center text-white mx-5 group hover:shadow-xl hover:scale-105 active:scale-95"
    
    return (
        <div className=" h-screen w-full bg-[#2a619a] flex flex-col justify-center items-center">
            <div className="flex flex-row-reverse items-center justify-center mb-30">
                <Image width={200} height={200} className="rounded-full" src={"/portrait.jpg"} alt={""}/>
                
                <div className="text-white flex flex-col items-center mx-5 h-[200px] justify-between">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">David Pequeno Marinho</h1>
                        <p className="text-md tracking-wider mb-10 font-bold">Desenvolvedor Web | Mobile</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link href={""}>
                            <div className={btnStyle}>
                                <RiGithubLine className="h-[30px] w-[30px]" />
                                <p className="text-[18px] font-bold">GitHub</p>
                            </div>
                        </Link>

                        <Link href={""}>
                            <div className={btnStyle}>
                                <RiLinkedinBoxLine className="h-[30px] w-[30px]" />
                                <p className="text-[18px] font-bold">LinkedIn</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}