import { configureStore } from "@reduxjs/toolkit";
import { USERS_SLICE, usersReducer } from "../modules/users/slice";
import { FAVOURITE_SLICE, favouriteReducer } from "../modules/favourites/slice";
import { PROFILE_SLICE, profileReducer } from "../modules/profile/slice";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer : {
        [USERS_SLICE]: usersReducer,
        [FAVOURITE_SLICE]: favouriteReducer,
        [PROFILE_SLICE]: profileReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch