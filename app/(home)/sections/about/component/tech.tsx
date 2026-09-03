import TechProps from "@/types/techProps"
import getTech from "@/utils/getTech"
import { useEffect, useState } from "react"
import TechCards from "./techCards"

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
            {dataList && (
                <div className="w-full max-w-[800px] flex flex-col items-center bg-[#3E65B3] px-1 py-10 rounded-md">
                    <h2 className="text-xl font-bold leading-tight text-white mb-10">Ferramentas que conheço</h2>
                    <div className=" w-full grid grid-cols-5 justify-items-center gap-4 gap-y-10">
                        {dataList.map((item, index) => (
                            <TechCards key={index} name={item.name} color={item.color} logo={item.logo} />
                        ))}
                    </div>
                </div>
            )}
            
        </div>
    )
}