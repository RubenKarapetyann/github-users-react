import { PROFILE_SLICE } from "./config";
import { profileSlice } from "./reducer";

export const {
    profileFulfilled,
    profilePending,
    profileRejected,
    recomendedUsersFulfilled
} = profileSlice.actions

export const GET_PROFILE = `${PROFILE_SLICE}/getProfile`
export const GET_RECOMENDED_USERS = `${PROFILE_SLICE}/getRecomendedUsers`

export const getProfile = (login: string) => ({ type: GET_PROFILE, payload: login })
export const getRecomendedUsers = (since: number) => ({ type: GET_RECOMENDED_USERS, payload: since })