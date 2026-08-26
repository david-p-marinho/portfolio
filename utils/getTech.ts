import TechProps from "@/types/techProps";
import techData from "@/data/tech.json"

const getTech = async(): Promise<TechProps[]> => {
    return techData as TechProps[]
}

export default getTech