import { call, put, takeLatest } from "redux-saga/effects";
import profileApi from "./profile-api";
import {AxiosResponse} from "axios";
import {ProfileState} from "./models_d";
import profileActions from "./profile-actions";
import profileTypes from "./profile-types";

function* fetchProfile() {
    try {
        const response: AxiosResponse<ProfileState> = yield call(profileApi.fetchProfile)
        yield put(profileActions.setProfile(response.data))
    }
    catch (e) {}
}

function* watchFetchProfile() {
    yield takeLatest(profileTypes.FETCH_PROFILE, fetchProfile)
}

const profileSaga = [
    watchFetchProfile(),
]

export default profileSaga;
