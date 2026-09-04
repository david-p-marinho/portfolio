export default interface ProjectProps {
    id: number
    title: string
    resume: string
    info: string
    imgs: string[]
    tags: number[]
    links: Array<{
        id: number,
        label: string,
        link: string
    }>
}