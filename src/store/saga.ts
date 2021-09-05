import { all } from "redux-saga/effects";
import profileSaga from "./profile/profile-saga";

export default function* saga() {
    yield all([
        ...profileSaga,
    ]);
}
