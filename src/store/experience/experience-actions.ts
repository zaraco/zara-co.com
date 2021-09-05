import {Action} from "../models_d";
import experienceTypes from "./experience-types";
import {ExperienceState} from "./models_d";


const experienceActions = {
    fetchExperience: (): Action => ({
        type: experienceTypes.FETCH_EXPERIENCE
    }),
    setExperience: (payload: ExperienceState): Action<ExperienceState> => ({
        type: experienceTypes.SET_EXPERIENCE,
        payload: payload,
    })
}

export default experienceActions;
