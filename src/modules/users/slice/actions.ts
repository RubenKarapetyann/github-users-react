import { USERS_SLICE } from "./config";
import { usersSlice } from "./reducer";
import { GetUsersProps } from "./types";

export const { 
    usersPending,
    usersFulfilled,
    usersRejected
} = usersSlice.actions

export const GET_USERS = `${USERS_SLICE}/getSagaUsers`
export const getUsers = (payload: GetUsersProps) => ({ type: GET_USERS, payload })