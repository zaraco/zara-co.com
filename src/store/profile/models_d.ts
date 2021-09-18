export type About = {
    name: string;
    surname: string;
    nickname: string;
    title: string;
    location: string;
    email: string;
    website: string;
    description: string;
    image: string;
}

export type Certificate = {
    title: string;
    company: string;
    date: string;
    link: string;
    image: string;
}

export type Publication = {
    title: string;
    journal: string;
    date: string;
    link: string;
}

export type ProfileState = {
    about?: About;
    certificates?: Certificate[];
    publications?: Publication[];
    languages?: string[];
}
