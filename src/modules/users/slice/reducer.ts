import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, USERS_SLICE } from "./config";
import { GetUsersErrorType, GetUsersFulfilledType } from "./types";

export const usersSlice = createSlice({
    name: USERS_SLICE,
    initialState,
    reducers: {
        usersPending: (state) => {
            state.error = null
            state.loading = true
        },
        usersFulfilled: (state, action: PayloadAction<GetUsersFulfilledType>) => {
            state.loading = false            
            if (action.payload.replace) {
                state.users = action.payload.items
                state.maxUsersCount = action.payload.total_count
            } else {
                state.users = [...state.users, ...action.payload.items]
            }
            state.next = state.maxUsersCount - state.users.length > 0
        },
        usersRejected: (state, action: PayloadAction<GetUsersErrorType>) => {
            state.loading = false
            state.users = []
            state.error = action.payload.error.message
        }
    }
})

const usersReducer = usersSlice.reducer
export default usersReducer