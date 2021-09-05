import {call, put, takeLatest} from "redux-saga/effects";
import experienceApi from "./experience-api";
import {AxiosResponse} from "axios";
import {ExperienceState} from "./models_d";
import experienceActions from "./experience-actions";
import experienceTypes from "./experience-types";


function* fetchExperience() {
    try {
        const response: AxiosResponse<ExperienceState> = yield call(experienceApi.fetchExperience)
        yield put(experienceActions.setExperience(response.data))
    }
    catch(e)
    {

    }
}

function* watchFetchExperience() {
    yield takeLatest(experienceTypes.FETCH_EXPERIENCE, fetchExperience)
}

const experienceSaga = [
    watchFetchExperience(),
]

export default experienceSaga;
