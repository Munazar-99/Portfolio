interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _updatedAt: string
}

export interface Image {
    _type: string
    asset: {
        _ref: string
        _type: 'reference'

    }
}

export interface Social extends SanityBody {
    _type: string
    title: string
    url: string
}
export interface HomePage extends SanityBody {
    _type: 'homepage'
    title: string
    introduction: string
    heroImage: Image
    socials: Social[]
    logo: Image
    body: string
}
export interface Project extends SanityBody {
    _type: 'projects'
    title: string
    image: Image
    summary: string
    technologies: Skill[]
    linktobuild: string
    linktogithub: string
}
export interface AboutPage extends SanityBody {
    _type: 'aboutpage'
    title: string
    firstParagraph: string
    secondParagraph: string
    thirdParagraph: string
    profileimge: Image
}
export interface Skill extends SanityBody {
    _type: 'skill'
    title: string
    xvalue:sring
    yvalue:sring
}