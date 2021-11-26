export type Experience = {
    title: string,
    technologies: string[],
    company: string,
    location: string,
    duration: string,
    image: string,
    description: string,
    urls: string[]
}

export type ExperienceState = {
    experience?: Experience[];
}
