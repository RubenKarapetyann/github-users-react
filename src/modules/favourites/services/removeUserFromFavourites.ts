import getFavouriteUsers from "./getFavouriteUsers"

const removeUserFromFavourites = (id: number) => {
    try {
        const { users } = getFavouriteUsers({})
        const newUsers = users.filter(user => user.id !== id)

        localStorage.setItem("favourites", JSON.stringify(newUsers))
        return newUsers
    } catch (err) {
        console.log(err)
        return []
    }
}

export default removeUserFromFavourites