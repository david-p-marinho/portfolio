import SubTitle from "@/components/subTitle";
import Card from "./component/card";
import Carousel from "./component/carousel";

export default function Projects(){
    return(
        <div className="w-full">
            <SubTitle title={"Projetos"}/>

            <Carousel/>
        </div>
    )
}