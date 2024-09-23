import { UserOfList } from "../../common/types/users"
import getFavouriteUsers from "./getFavouriteUsers"

const addUserToFavourites = (user: UserOfList) => {
    try {
        const users = getFavouriteUsers()
        const newUsers = [...users, user]

        localStorage.setItem("favourites", JSON.stringify(newUsers))
        return newUsers
    } catch (err) {
        console.log(err)
    }
}

export default addUserToFavourites
