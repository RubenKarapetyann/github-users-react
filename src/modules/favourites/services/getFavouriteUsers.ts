import { PAGINATION } from "../../common/constants/api"
import { UserOfList } from "../../common/types/users"
import { GetFavouriteUsersProps } from "./types"

const getFavouriteUsers = ({ perPage=PAGINATION, page, search }: GetFavouriteUsersProps): UserOfList[] => {
    try {
        const usersJson = localStorage.getItem("favourites")

        if (!usersJson){
            return []
        }
        let users = JSON.parse(usersJson) as UserOfList[]

        if (search) {
            users = users.filter(user => new RegExp(search, "i").test(user.login))
        }

        if (page !== undefined) {
            users = users.slice(page * perPage, page * perPage + perPage)
        }

        return users
    } catch (err) {
        console.log(err)
        return []
    }
}

export default getFavouriteUsers