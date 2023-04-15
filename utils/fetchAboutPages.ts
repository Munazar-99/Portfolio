import { AboutPage } from "../typings"

export const fetchAboutPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutPage`)
    const data = await res.json()
    const aboutPage: AboutPage = data.aboutpage

    return aboutPage
}