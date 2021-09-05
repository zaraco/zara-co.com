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

export type ProfileState = {
    about?: About;
}
