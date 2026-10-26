import workData from "@/data/work.json"
import WorkProps from "@/types/workProps";

const getWork = async(): Promise<WorkProps[]> => {
    return workData as WorkProps[]
}

export default getWork