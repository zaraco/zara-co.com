import {AxiosResponse} from "axios";
import {SkillsState} from "./models_d";
import {call, put, takeLatest} from "redux-saga/effects";
import skillsApi from "./skills-api";
import skillsActions from "./skills-actions";
import skillsTypes from "./skills-types";

function* fetchSkills() {
    try {
        const response: AxiosResponse<SkillsState> = yield call(skillsApi.fetchSkills)
        yield put(skillsActions.setAction(response.data))
    }
    catch (e) {
    }
}

function* watchFetchSkills() {
    yield takeLatest(skillsTypes.FETCH_SKILLS, fetchSkills)
}

const skillsSaga = [
    watchFetchSkills()
]

export default skillsSaga;
