import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, PROFILE_SLICE } from "./config";
import { getRecomendedUsers, getUser } from "./thunks";
import { User, UserOfList } from "../../common/types/users";

export const profileSlice = createSlice({
    name: PROFILE_SLICE,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {                
                state.loading = false
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {                                
                state.loading = false
                state.user = null
                if (action.error.message) {
                    state.error = action.error.message
                }
            })
            .addCase(getRecomendedUsers.fulfilled, (state, action: PayloadAction<UserOfList[]>) => {
                state.recomendedUsers = action.payload
            })
    }
})

const profileReducer = profileSlice.reducer
export default profileReducer