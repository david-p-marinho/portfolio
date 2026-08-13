interface props {
    title: string
    icon: React.ReactNode
}

export default function FrameWorkCard({title, icon}: props) {
    return(
        <div className="group  w-[75px] flex flex-col items-center wrap">
            <div className="w-[40px] h-[40px] flex flex-col justify-center items-center bg-[#D9D9D9] rounded-full text-black">
                {icon}
            </div>
            <label className="md:hidden md:group-hover:block">{title}</label>
        </div>

    )
}