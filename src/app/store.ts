import { configureStore } from "@reduxjs/toolkit";
import { USERS_SLICE } from "../modules/users/slice/config";
import usersReducer from "../modules/users/slice/reducer";

const store = configureStore({
    reducer : {
        [USERS_SLICE]: usersReducer
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch