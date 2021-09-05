import {SkillsState} from "./models_d";
import axios from "axios";
import config from "../config";

const skillsApi = {
    fetchSkills: (): Promise<SkillsState> => {
        return axios.get(config.SKILLS_URL)
    }
}
export default skillsApi;
