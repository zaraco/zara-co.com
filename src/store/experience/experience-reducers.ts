import {ExperienceState} from "./models_d";
import {Action} from "../models_d";
import experienceTypes from "./experience-types";

const initialState: ExperienceState = {
    experience: [],
}

const experienceReducers = (state: ExperienceState = initialState, action: Action) => {
    switch (action.type) {
        case experienceTypes.SET_EXPERIENCE:
            return action.payload;
        default:
            return state;
    }
}

export default experienceReducers;
