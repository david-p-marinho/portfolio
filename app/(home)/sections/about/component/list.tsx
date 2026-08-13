interface props {
    title: string
    content: string[]
}

export default function List({title, content}: props) {
    return(
        <div>
            <h3 className="text-center text-[20px] font-bold mb-5">{title}</h3>

            <ul className="list-disc list-inside">
                {
                    content.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))
                }
            </ul>
        </div>
    )
}