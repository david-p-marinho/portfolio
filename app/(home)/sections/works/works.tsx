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
            <h2 className="subtitle">02 / Areas de Trabalho</h2>

            <div className="flex gap-4">
                {
                    workList && workList.map((work, index) => (
                        <Card key={index} title={work.title} icon={work.icon} resume={work.resume} />
                    ))
                }
            </div>
        </div>
    )
}