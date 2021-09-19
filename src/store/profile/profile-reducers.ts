import {ProfileState} from "./models_d";
import {Action} from "../models_d";
import profileTypes from "./profile-types";

const initialState: ProfileState = {
    about: undefined,
    publications: [],
    certificates: [],
    languages: [],
    hobbies: [],
    education: [],
    social: [],
}

const profileReducers = (state: ProfileState = initialState, action: Action): ProfileState => {
    switch (action.type) {
        case profileTypes.SET_PROFILE:
            return {
                ...state,
                about: action?.payload?.about,
                publications: action?.payload?.publications,
                certificates: action?.payload?.certificates,
                languages: action?.payload?.languages,
                hobbies: action?.payload?.hobbies,
                education: action?.payload?.education,
                social: action?.payload?.social,
            };
        default:
            return state;
    }
};

export default profileReducers;
