export default function Tags({name, color}: {name: string, color: string}) {
    return(
        <div style={{'--main-color': color == "#ffffff" ? "#000000": color} as React.CSSProperties} className="bg-[var(--main-color)] w-fit min-w-[100px] h-[30px] text-white flex justify-center items-center rounded-md" >
            <p>{name}</p>
        </div>
    )
}