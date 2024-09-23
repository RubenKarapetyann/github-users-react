import { UserOfList } from "../../common/types/users"

const getFavouriteUsers = (): UserOfList[] => {
    try {
        const usersJson = localStorage.getItem("favourites")

        if (!usersJson){
            return []
        }

        return JSON.parse(usersJson)
    } catch (err) {
        console.log(err)
        return []
    }
}

export default getFavouriteUsers