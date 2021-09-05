import {ExperienceState} from "./models_d";
import axios from "axios";
import config from "../config";

const experienceApi = {
    fetchExperience: (): Promise<ExperienceState> => {
        return axios.get(config.EXPERIENCE_URL)
    }
}

export default experienceApi;
