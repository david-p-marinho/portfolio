interface props {
    title: string
    icon: React.ReactNode
}

export default function FrameWorkCard({title, icon}: props) {
    return(
        <div className="group  w-[45px] flex flex-col items-center">
            <div className="w-[30px] h-[30px] flex flex-col justify-center items-center bg-[#D9D9D9] rounded-full text-black">
                {icon}
            </div>
            <label className="md:hidden md:group-hover:block">{title}</label>
        </div>

    )
}