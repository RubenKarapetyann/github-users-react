import { createSlice } from "@reduxjs/toolkit";
import { initialState, USERS_SLICE } from "./config";

export const usersSlice = createSlice({
    name: USERS_SLICE,
    initialState,
    reducers: {} 
})

const usersReducer = usersSlice.reducer
export default usersReducer