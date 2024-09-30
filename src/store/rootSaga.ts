import { all } from "redux-saga/effects";
import { watchGetProfile } from "../modules/profile/slice/sagas";
import { watchGetUsers } from "../modules/users/slice";

export default function* rootSaga () {
    yield all([
        watchGetProfile(),
        watchGetUsers()
    ])
}