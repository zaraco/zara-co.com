import {ProfileState} from "./models_d";
import axios from "axios";
import config from "../config";


const profileApi = {
    fetchProfile: (): Promise<ProfileState> => {
        return axios.get(config.PROFILE_URL)
    }
}

export default profileApi;
