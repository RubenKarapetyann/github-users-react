import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, PROFILE_SLICE } from "./config";
import { User, UserOfList } from "../../common/types/users";
import { ProfileRejectedProps } from "./types";

export const profileSlice = createSlice({
    name: PROFILE_SLICE,
    initialState,
    reducers: {
        profilePending: (state) => {
            state.loading = true
            state.error = null
        },
        profileFulfilled: (state, action: PayloadAction<User>) => {
            state.loading = false
            state.user = action.payload
        },
        profileRejected: (state, action: PayloadAction<ProfileRejectedProps>) => {
            state.loading = false
            state.user = null
            state.error = action.payload.error.message
        },
        recomendedUsersFulfilled: (state, action: PayloadAction<UserOfList[]>) => {
            state.recomendedUsers = action.payload
        }
    }
})

const profileReducer = profileSlice.reducer
export default profileReducer