import { createContext, ReactNode, useContext, useState } from "react"
import { FavouritehContextType } from "../../types/contexts/favouriteContext"
import { UserOfList } from "../../modules/common/types/users"
import { addUserToFavourites, getFavouriteUsers, removeUserFromFavourites } from "../../modules/favourites/services"

const FavouriteContext = createContext<FavouritehContextType | null>(null)

const FavouriteContextProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<UserOfList[]>(getFavouriteUsers())

    const addUser = (user: UserOfList) => setUsers(addUserToFavourites(user))

    const removeUser = (id: number) => setUsers(removeUserFromFavourites(id))

    return (
        <FavouriteContext.Provider value={{ users, addUser, removeUser }}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContextProvider

export const useFavourite = () => useContext(FavouriteContext)
