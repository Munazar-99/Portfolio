import { Tproject } from "../typings"

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const data = await res.json()
    const projects: Tproject[] = data.projects

    return projects
}