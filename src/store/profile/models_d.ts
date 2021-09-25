import {Icon} from "../models_d";

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
    source: string;
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

export type Hobby = {
    title: string;
    icon: Icon;
}

export type Language = {
    title: string;
    level: string;
}

export type Education = {
    title: string;
    level: string;
    graduatedAt: number;
}

export type Social = {
    link: string;
    icon: Icon;
}

export type ProfileState = {
    about?: About;
    certificates?: Certificate[];
    publications?: Publication[];
    languages?: Language[];
    hobbies?: Hobby[];
    education?: Education[];
    social?: Social[];
}
