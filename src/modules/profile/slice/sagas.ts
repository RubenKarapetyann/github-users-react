import { put, takeLatest } from "redux-saga/effects";
import { GET_PROFILE, GET_RECOMENDED_USERS, profileFulfilled, profilePending, profileRejected, recomendedUsersFulfilled } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { User, UserOfList } from "../../common/types/users";
import { getData } from "../../common/services";
import { USERS_ENDPOINT } from "../../common/constants/api";


function* getProfileSaga ({ payload: login }: PayloadAction<string>) {
    try {
        yield put(profilePending())
        const profile: User = yield getData({ url: `${USERS_ENDPOINT}/${login}` })
        yield put(profileFulfilled(profile))
    } catch (err) {
        if (err instanceof Error) {
            yield put(profileRejected({ error: err }))
        } else {
            yield put(profileRejected({ error: new Error("unknown error") }))
        } 
    }
}

function* getRecomendedUsersSaga({ payload: since }: PayloadAction<number>) {
    const users: UserOfList[] = yield getData({ url: `${USERS_ENDPOINT}?per_page=3&since=${since}` })
    yield put(recomendedUsersFulfilled(users))
}

export function* watchGetProfile () {
    yield takeLatest(GET_PROFILE, getProfileSaga)
    yield takeLatest(GET_RECOMENDED_USERS, getRecomendedUsersSaga)
}