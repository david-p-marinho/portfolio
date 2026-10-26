import getWork from "@/utils/getWork";
import Image from "next/image";
import { RiGlobalLine } from "react-icons/ri";
import Card from "./component/card";
import WorkProps from "@/types/workProps";
import { useEffect, useState } from "react";

export default function Works() {
    const [workList, setWorkList] = useState<WorkProps[]>()

    useEffect(() => {
        async function LoadWorks() {
            const data = await getWork()
            setWorkList(data)
        }

        LoadWorks()
    }, [])

    return (
        <div className="w-full h-screen py-10 flex flex-col items-center gap-4">
            <span className="text-[#189CC9] font-mono text-sm block font-bold">02 / Areas de Trabalho</span>

            <div className="flex gap-4">
                {
                    workList && workList.map((work) => (
                        <Card title={work.title} icon={work.icon} resume={work.resume} />
                    ))
                }
            </div>
        </div>
    )
}