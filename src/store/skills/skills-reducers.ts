import {SkillsState} from "./models_d";
import {Action} from "../models_d";
import skillsTypes from "./skills-types";

const initialState:SkillsState = {
    skillGroups: [],
}

const skillsReducers = (state: SkillsState = initialState, action: Action): SkillsState => {
    switch (action.type) {
        case skillsTypes.SET_SKILLS:
            return {
                ...state,
                skillGroups: action.payload.skillGroups
            };
        default:
            return state
    }
}

export default skillsReducers;

