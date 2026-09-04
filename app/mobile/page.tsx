import { RiArrowDownSLine } from "react-icons/ri";
import Hero from "../(home)/sections/hero/hero";
import Tags from "../(home)/sections/projects/component/tags";

export default function SnapSimples() {
  return (
    <main className="bg-[#F7F4ED] flex flex-col items-center">
		<Hero/>

		<div className="py-10 bg-[#F7F4ED] rounded-lg w-full -mt-2">
			<span className="text-[#189CC9] font-mono text-sm block font-bold mb-20 text-center">01 / PORTFÓLIO</span>
			
			<div>
				<ul className="">
					<li className="flex justify-center items-center">
						<div className="w-full relative px-2 py-2 bg-[#ABCDD1] rounded-md mx-2">
							<p className="text-center text-lg">Perclima</p>
							<p className="text-[12px] w-[90%]">Sistema de CRM (Customer Relationship Management) para a empresa perclima refrigeração</p>
							<div className="flex gap-6 w-full justify-center mt-5">
								<Tags name={"NextJS"} color={"#000000"}/>
								<Tags name={"JavaScript"} color={"#D6C118"}/>
							</div>
							
							<div className="absolute right-5 top-1/2 -translate-y-1/2 text-bold flex justify-center items-center  w-8 h-8 rounded-full bg-[#26A6C7] [mask-image:radial-gradient(circle,#000_30%,#00000000_100%)]">
								<RiArrowDownSLine className="text-[24px] text-white"  />
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
    </main>
  );
}