import { createContext, ReactNode, useState } from "react"
import { FavouritehContextType } from "../../types/contexts/favouriteContext"
import { UserOfList } from "../../types/api/users"

const FavouriteContext = createContext<FavouritehContextType | null>(null)

const FavouriteContextProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<UserOfList[]>([])

    const addUser = (user: UserOfList) => setUsers(users => [...users, user])

    const removeUser = (id: number) => setUsers(users => users.filter(user => user.id !== id))

    return (
        <FavouriteContext.Provider value={{ users, addUser, removeUser }}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContextProvider