import SubTitle from "@/components/subTitle";
import HighLightInfo from "./component/highlightInfo";
import Link from "next/link";

export default function About() {
    return(
        <div className="flex flex-col items-center mb-25">
            <SubTitle title={"Sobre Mim"}/>

            <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat</p>
        
            <HighLightInfo/>

            <Link className="bg-[#304E8A] px-6 py-3 rounded-full shadow-md" href={""}>
                <p className="font-bold text-white text-[15px]">Baixar curriculo</p>
            </Link>
        </div>
    )
}