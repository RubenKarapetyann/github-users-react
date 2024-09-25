import { UsersSliceState } from "./types"

export const USERS_SLICE = "users"
export const initialState: UsersSliceState = {
    users: [],
    loading: false,
    error: null,
    next: false,
}