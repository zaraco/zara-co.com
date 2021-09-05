export type Experience = {
    title: string,
    description: string,
    company: string,
    location: string,
    duration: string,
}

export type ExperienceState = {
    experience?: Experience[];
}
