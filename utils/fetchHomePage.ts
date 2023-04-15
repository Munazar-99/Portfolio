import { HomePage } from "../typings"

export const fetchHomePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHomePage`)
    const data = await res.json()
    const homePage: HomePage = data.homepage

    return homePage
}