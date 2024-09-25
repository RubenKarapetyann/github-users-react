import { configureStore } from "@reduxjs/toolkit";
import { USERS_SLICE, usersReducer } from "../modules/users/slice";
import { FAVOURITE_SLICE, favouriteReducer } from "../modules/favourites/slice";

const store = configureStore({
    reducer : {
        [USERS_SLICE]: usersReducer,
        [FAVOURITE_SLICE]: favouriteReducer
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch