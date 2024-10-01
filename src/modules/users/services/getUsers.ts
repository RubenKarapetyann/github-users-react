import { PAGINATION, SEARCH_USERS_URL } from "../../common/constants/api"
import { buildUrl, getData } from "../../common/services"
import { GetUsersProps, GetUsersReturnType } from "./types"

const getUsers = async ({ search, filters, page }: GetUsersProps): Promise<GetUsersReturnType> => {
    return await getData({
        url: buildUrl({
            url: SEARCH_USERS_URL, 
            search, 
            filters,
            perPage: PAGINATION,
            sort: true,
            page
        })
    })
}

export default getUsers