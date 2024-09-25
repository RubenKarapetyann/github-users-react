import { createAsyncThunk } from "@reduxjs/toolkit"
import { PROFILE_SLICE } from "./config"
import { getData } from "../../common/services"
import { USERS_ENDPOINT } from "../../common/constants/api"

export const getUser = createAsyncThunk(
    `${PROFILE_SLICE}/getUser`,
    async (login: string) => {
        return await getData({ url: `${USERS_ENDPOINT}/${login}` })
    }
)

export const getRecomendedUsers = createAsyncThunk(
    `${PROFILE_SLICE}/getRecomendedUsers`,
    async (since: number) => {
        return await getData({ url: `${USERS_ENDPOINT}?per_page=3&since=${since}` })
    }
)