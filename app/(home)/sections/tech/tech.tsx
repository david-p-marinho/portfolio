import TechProps from "@/types/techProps"
import getTech from "@/utils/getTech"
import { useEffect, useState } from "react"
import Card from "./component/card"

export default function Tech() {
    const [dataList, setDataList] = useState<TechProps[]>([])

    useEffect(() => {
        async function loadData() {
           const data = await getTech()
           setDataList(data) 
        }

        loadData()
    }, [])

    return(
        <div className="w-full h-full flex flex-col items-center">
            <span className="text-[#189CC9] font-mono text-sm block font-bold mb-20">02 / TECNOLOGIAS</span>
            {dataList && (
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-5xl font-bold leading-tight text-[#189CC9]">Tecnologias que domino</h2>
                    <div className="flex w-full justify-between">
                        {dataList.map((item, index) => (
                            <Card key={index} name={item.name} color={item.color} />
                        ))}
                    </div>
                </div>
            )}
            
        </div>
    )
}