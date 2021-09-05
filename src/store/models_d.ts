import {ProfileState} from "./profile/models_d";
import {ExperienceState} from "./experience/models_d";

export type Action<P = any> = {
    type: string;
    payload?: P;
}

export type State = {
    profile: ProfileState;
    experience: ExperienceState;
}
