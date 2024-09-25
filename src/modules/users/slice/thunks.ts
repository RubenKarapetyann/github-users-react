import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERS_SLICE } from "./config";
import { PAGINATION, SEARCH_USERS_URL } from "../../common/constants/api";
import { buildUrl, getData } from "../../common/services";
import { GetUsersProps } from "./types";

export const getUsers = createAsyncThunk(
    `${USERS_SLICE}/getUsers`,
    async (
        { search, filters, page, replace=false }: GetUsersProps
    ) => {
        const collection = await getData({
            url:
                buildUrl({
                    url: SEARCH_USERS_URL,
                    search,
                    filters,
                    perPage: PAGINATION,
                    sort: true,
                    page
                })
        })              
        return {
            ...collection,
            replace
        }
    }
)
