import {State} from "../models_d";
import {Experience} from "./models_d";

const experienceSelectors = {
    getExperience: (state: State): Experience[] | undefined => state.experience.experience,
}

export default experienceSelectors;
