import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, USERS_SLICE } from "./config";
import { getUsers } from "./thunks";
import { GetUsersFulfilledType } from "./types";

export const usersSlice = createSlice({
    name: USERS_SLICE,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<GetUsersFulfilledType>) => {                
                state.loading = false
                if (action.payload.replace) {
                    state.users = action.payload.items
                    state.maxUsersCount = action.payload.total_count
                } else {
                    state.users = [...state.users, ...action.payload.items]
                }
                state.next = state.maxUsersCount - state.users.length > 0
            })
            .addCase(getUsers.rejected, (state, action) => {                                
                state.loading = false
                state.users = []
                if (action.error.message) {
                    state.error = action.error.message
                }
            })
    },
})

const usersReducer = usersSlice.reducer
export default usersReducer