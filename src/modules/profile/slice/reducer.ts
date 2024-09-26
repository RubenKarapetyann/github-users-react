import { createSlice } from "@reduxjs/toolkit";
import { initialState, PROFILE_SLICE } from "./config";
import { getRecomendedUsers, getUser } from "./thunks";

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
            .addCase(getUser.fulfilled, (state, action) => {                
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
            .addCase(getRecomendedUsers.fulfilled, (state, action) => {
                state.recomendedUsers = action.payload
            })
    }
})

const profileReducer = profileSlice.reducer
export default profileReducer