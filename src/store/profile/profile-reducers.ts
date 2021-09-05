import {ProfileState} from "./models_d";
import {Action} from "../models_d";
import profileTypes from "./profile-types";

const initialState: ProfileState = {
    about: undefined,
}

const profileReducers = (state: ProfileState = initialState, action: Action): ProfileState => {
    switch (action.type) {
        case profileTypes.SET_PROFILE:
            return {
                ...state,
                about: action.payload.about
            };
        default:
            return state;
    }
};

export default profileReducers;
