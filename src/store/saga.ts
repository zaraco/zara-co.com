import { all } from "redux-saga/effects";
import profileSaga from "./profile/profile-saga";
import experienceSaga from "./experience/experience-saga";
import skillsSaga from "./skills/skills-saga";

export default function* saga() {
    yield all([
        ...profileSaga,
        ...experienceSaga,
        ...skillsSaga
    ]);
}
