import Tech from "./component/tech";
import Image from "next/image";
import Info from "./component/info";

export default function About() {
    return (
        <div className="w-full h-screen py-10 flex flex-col items-center gap-4">
            <h2 className="subtitle">04 / SOBRE MIM</h2>
            <div className="flex w-full items-center justify-center md:justify-evenly">
                <div className="md:flex items-center justify-center hidden">
                    <Image className="rounded-md relative -right-25 -top-25" width={240} height={365} src={"/about1.png"} alt={""} />
                    <Image className="rounded-md z-10" width={240} height={365} src={"/about2.png"} alt={""} />
                </div>
                <div className="w-full mx-3 md:w-[30dvw] bg-[#3E65B3] gap-4 text-white px-3 py-5 rounded-md flex flex-col items-center">
                    <Info />

                    <a href={"https://drive.google.com/uc?export=download&id=1X4PgrlRP-4pv-r0URroF5L2mj43XlZsd"}>
                        <div className="bg-[#189CC9] w-[200px] py-5 flex justify-center items-center rounded-full shadow-md transision-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-[#2BB4E3] hover:cursor-pointer">
                            <p>Ver meu CV</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}