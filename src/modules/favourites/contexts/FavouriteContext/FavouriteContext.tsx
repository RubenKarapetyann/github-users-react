import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { getFavouriteUsers, removeUserFromFavourites } from "../../services"
import { FavouritehContextType } from "./types"
import { UserOfList } from "../../../common/types/users"
import { PAGINATION } from "../../../common/constants/api"
import { useSearchAndFilters } from "../../../common/hooks"

const FavouriteContext = createContext<FavouritehContextType | null>(null)

const FavouriteContextProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<UserOfList[]>([])
    const { search } = useSearchAndFilters()

    const removeUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
        removeUserFromFavourites(id)
    }

    const addMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        let tempUsers = []

        if (!search) {
            tempUsers = [...users, ...getFavouriteUsers({ page })]
        } else {
            tempUsers = [...users, ...getFavouriteUsers({ page, search })]
        }
        setUsers(tempUsers)
    }

    useEffect(() => {
        if (!search) {
            setUsers(getFavouriteUsers({ page: 0 }))
            return
        }
        setUsers(getFavouriteUsers({ search, page: 0 }))
    }, [search])

    const next = getFavouriteUsers({}).length - users.length > 0    
    return (
        <FavouriteContext.Provider value={{ users, removeUser, addMoreUsers, next }}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContextProvider

export const useFavourite = () => useContext(FavouriteContext)
