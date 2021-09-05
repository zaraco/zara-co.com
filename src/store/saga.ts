import { all } from "redux-saga/effects";
import profileSaga from "./profile/profile-saga";
import experienceSaga from "./experience/experience-saga";

export default function* saga() {
    yield all([
        ...profileSaga,
        ...experienceSaga,
    ]);
}
