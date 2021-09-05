import {Action} from "../models_d";
import skillsTypes from "./skills-types";
import {SkillsState} from "./models_d";

const skillsActions = {
    fetchAction: (): Action => ({
        type: skillsTypes.FETCH_SKILLS
    }),
    setAction: (payload: SkillsState): Action<SkillsState> => ({
        type: skillsTypes.SET_SKILLS,
        payload: payload
    })
}
export default skillsActions;
