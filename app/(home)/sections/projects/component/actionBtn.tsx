export default function ActionBtn({ link, name }: { link: string, name: string }) {
    return (
        <a href={link} className="bg-[#189CC9] px-5 py2 min-w-[150px] w-fit h-[70px] flex justify-center items-center rounded-full text-white">
            <p className="font-bold">{name}</p>
        </a>
    )
}