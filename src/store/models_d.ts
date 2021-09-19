import {ProfileState} from "./profile/models_d";
import {ExperienceState} from "./experience/models_d";
import {SkillsState} from "./skills/models_d";
import {PortfolioState} from "./portfolio/models_d";

export type Action<P = any> = {
    type: string;
    payload?: P;
}

export enum Icon {
    GITHUB = "GITHUB",
    LINKEDIN = "LINKEDIN",
    MEDIUM = "MEDIUM",
    MUSIC = "MUSIC",
    MOVIE = "MOVIE",
    SPORT = "SPORT",
    BOOK = "BOOK",
    PAINTING = "PAINTING"
}

export type State = {
    profile: ProfileState;
    experience: ExperienceState;
    skills: SkillsState;
    portfolio: PortfolioState;
}
