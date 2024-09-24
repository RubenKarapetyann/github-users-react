import { createContext, useContext, useState, PropsWithChildren, useRef, useEffect } from "react"
import { UsersContextType } from "./types"
import { UserOfList } from "../../../common/types/users"
import { PAGINATION, SEARCH_USERS_URL } from "../../../common/constants/api"
import { buildUrl, getData } from "../../../common/services"
import { useSearchAndFilters } from "../../../common/hooks"

const UsersContext = createContext<UsersContextType | null>(null)

const UsersContextProvider = ({ children }: PropsWithChildren) => {
    const [users, setUsers] = useState<UserOfList[]>([])
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const maxUsersCount = useRef<number>(0)
    const { search, filters } = useSearchAndFilters()
    

    const loadUsers = async () => {
        const page = Math.ceil(users.length / PAGINATION) + 1
        return await getData({ url: 
            buildUrl({ 
                url: SEARCH_USERS_URL, 
                search, 
                filters,
                perPage: PAGINATION,
                sort: true,
                page
            })
        })
    }


    const loadMoreUsers = () => {
        setLoading(true)
        loadUsers()
            .then(collection => {
                setUsers(users => [...users, ...(collection.items ? collection.items : collection)])
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }

    useEffect(() => {        
        setLoading(true)
        loadUsers()
            .then(collection => {                
                setUsers(collection.items || [])
                maxUsersCount.current = collection.total_count || 0
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [ location.search ])

    const next = maxUsersCount.current - users.length > 0
    return (
        <UsersContext.Provider value={{ users, error, loading, loadMoreUsers, next }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider

export const useUsers = () => useContext(UsersContext)
