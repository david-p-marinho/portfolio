export default interface ProjectProps {
    id: number
    title: string
    resume: string
    imgs: string[]
    tags: string[]
    links: Array<{
        id: number,
        label: string,
        link: string
    }>
}