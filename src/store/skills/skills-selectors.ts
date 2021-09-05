import {SkillGroup} from "./models_d";
import {State} from "../models_d";

const skillsSelectors = {
    getSkillGroups: (state: State): SkillGroup[] | undefined => state.skills.skillGroups
}

export default skillsSelectors;
