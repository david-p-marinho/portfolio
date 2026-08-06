import SubTitle from "@/components/subTitle";
import HighLightInfo from "./component/highlightInfo";
import Link from "next/link";

export default function About() {
    return(
        <div className="flex flex-col items-center">
            <SubTitle title={"Sobre Mim"}/>

            <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat</p>
        
            <HighLightInfo/>

            <Link className="bg-[#458393] px-6 py-3 rounded-md shadow-md" href={""}>
                <p className="font-bold text-white text-[15px]">Ver meu CV</p>
            </Link>
        </div>
    )
}