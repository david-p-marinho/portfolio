export default function Abilities() {
    return(
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full max-w-[800px] flex flex-col items-center bg-[#3E65B3] px-5 py-10 rounded-md text-white">
                <h2 className="text-xl font-bold leading-tight mb-10">Habilidades</h2>

                <ul className="list-disc list-inside">
                    <li>Comunicação Assertiva</li>
                    <li>Resolução de Problemas</li>
                    <li>Trabalho em Equipe</li>
                    <li>Proatividade</li>
                </ul>
            </div>
        </div>
    )
}