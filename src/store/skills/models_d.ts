export type Skill = {
    name: string,
    icon: string
}

export type SkillGroup = {
    title: string,
    skills: Skill[]
}

export type SkillsState = {
    skillGroups?: SkillGroup[]
}

