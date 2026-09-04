import Image from "next/image";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxLine, RiUserLine } from "react-icons/ri";

export default function Hero() {
    const btnStyle = "bg-[#189CC9] shadow-md px-3 py-2 rounded-full flex justify-center transition-transform duration-200 items-center text-white mx-5 group hover:shadow-xl hover:scale-105 active:scale-95"
    
    return (
        <div className=" md:h-screen w-full bg-gradient-to-b from-[#273070] to-[#20345C] flex justify-center items-center">
            <div className="flex flex-col md:flex-row-reverse items-center justify-center my-10">
                <div className="relative md:w-[250px] md:h-[250px] w-[150px] h-[150px]">
                    <Image fill className="rounded-full object-cover" src={"/portrait.jpg"} alt={""}/>

                </div>
                
                <div className="text-white flex flex-col items-center mx-5 h-[200px] justify-between">
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl font-bold ">David Pequeno Marinho</h1>
                        <p className="text-md md:text-lg text-md tracking-wider mb-10 font-bold">Desenvolvedor Web | Mobile</p>
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