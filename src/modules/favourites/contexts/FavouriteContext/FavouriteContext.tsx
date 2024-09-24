import { createContext, PropsWithChildren, useContext, useState } from "react"
import { FavouritehContextType } from "./types"
import { addUserToFavourites, getFavouriteUsers, removeUserFromFavourites } from "../../services"
import { UserOfList } from "../../../common/types/users"

const FavouriteContext = createContext<FavouritehContextType | null>(null)

const FavouriteContextProvider = ({ children }: PropsWithChildren) => {
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
