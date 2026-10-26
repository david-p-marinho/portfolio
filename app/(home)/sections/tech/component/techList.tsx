import TechProps from "@/types/techProps"
import getTech from "@/utils/getTech"
import { useEffect, useState } from "react"
import TechCards from "./techCards"

export default function TechList() {
    const [dataList, setDataList] = useState<TechProps[]>([])

    useEffect(() => {
        async function loadData() {
           const data = await getTech()
           setDataList(data) 
        }

        loadData()
    }, [])

    return(
        <div className="w-full flex flex-col items-center h-[400PX]">
            {dataList && (
                <div className="w-full max-w-[800px] h-full flex flex-col justify-center items-center px-1 rounded-md">
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