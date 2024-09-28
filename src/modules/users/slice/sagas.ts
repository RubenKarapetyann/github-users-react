import { put, takeLatest } from "redux-saga/effects"
import { GET_USERS, usersFulfilled, usersPending, usersRejected } from "./actions"
import { PayloadAction } from "@reduxjs/toolkit"
import { GetUsersFulfilledType, GetUsersProps } from "./types"
import { buildUrl, getData } from "../../common/services"
import { PAGINATION, SEARCH_USERS_URL } from "../../common/constants/api"

function* getUsersSaga ({ payload }: PayloadAction<GetUsersProps>) {
    try {        
        const { search, filters, page, replace=false } = payload
        yield put(usersPending())
        const collection: GetUsersFulfilledType = yield getData({
            url:
                buildUrl({
                    url: SEARCH_USERS_URL,
                    search,
                    filters,
                    perPage: PAGINATION,
                    sort: true,
                    page
                })
        })              
        yield put(usersFulfilled({...collection, replace}))
    } catch (err) {
        if (err instanceof Error) {
            yield put(usersRejected({ error: err }))
        }else {
            yield put(usersRejected({ error: new Error("unknown error") }))
        }
    }
}

export function* watchGetUsers () {
    yield takeLatest(GET_USERS, getUsersSaga)
}