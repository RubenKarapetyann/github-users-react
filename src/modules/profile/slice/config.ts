import { ProfileSliceState } from "./types"

export const PROFILE_SLICE = "profile"
export const initialState: ProfileSliceState = {
    user: null,
    loading: false,
    error: null,
    recomendedUsers: []
}