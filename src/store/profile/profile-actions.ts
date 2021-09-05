import {Action} from "../models_d";
import profileTypes from "./profile-types";
import {ProfileState} from "./models_d";

const profileActions = {
    fetchProfile: (): Action => ({
        type: profileTypes.FETCH_PROFILE
    }),

    setProfile: (payload: ProfileState): Action<ProfileState>  => ({
        type: profileTypes.SET_PROFILE,
        payload: payload,
    }),
}

export default profileActions;
