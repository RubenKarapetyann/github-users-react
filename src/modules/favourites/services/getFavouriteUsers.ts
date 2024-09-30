import { PAGINATION } from "../../common/constants/api"
import { UserOfList } from "../../common/types/users"
import { GetFavouriteUsersProps, GetFavouriteUsersReturnType } from "./types"

const getFavouriteUsers = ({ perPage=PAGINATION, page, search }: GetFavouriteUsersProps): GetFavouriteUsersReturnType => {
    const errorReturn = {
        users: [],
        total_count: 0
    }
    try {
        const usersJson = localStorage.getItem("favourites")

        if (!usersJson){
            return errorReturn
        }
        let users = JSON.parse(usersJson) as UserOfList[]

        if (search) {
            users = users.filter(user => new RegExp(search, "i").test(user.login))
        }

        const total_count = users.length 
        if (page !== undefined) {
            users = users.slice(page * perPage, page * perPage + perPage)
        }

        return {
            users,
            total_count
        }
    } catch (err) {
        console.log(err)
        return errorReturn
    }
}

export default getFavouriteUsers