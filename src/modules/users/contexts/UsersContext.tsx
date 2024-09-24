import { createContext, useContext, useState, PropsWithChildren, useRef, useEffect } from "react"
import { UsersContextType } from "./types"
import { UserOfList } from "../../common/types/users"
import { useSearchParams } from "react-router-dom"
import FILTERS from "../../common/constants/filters"
import { PAGINATION, SEARCH_USERS_URL } from "../../common/constants/api"
import { buildUrl, getData } from "../../common/services"

const UsersContext = createContext<UsersContextType | null>(null)

const UsersContextProvider = ({ children }: PropsWithChildren) => {
    const [users, setUsers] = useState<UserOfList[]>([])
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const maxUsersCount = useRef<number>(0)

    const [ params ] = useSearchParams()

    const search = params.get("q")
    const currentFilters: Record<string, string> = {}
    FILTERS.map(filter => {
        currentFilters[filter.name] = params.get(filter.name) || filter.initialValue.toString()
    })
    

    const loadUsers = async () => {
        const page = Math.ceil(users.length / PAGINATION) + 1
        return await getData({ url: 
            buildUrl({ 
                url: SEARCH_USERS_URL, 
                search, 
                filters: currentFilters,
                perPage: PAGINATION,
                sort: true,
                page
            })
        })
    }


    const loadMoreUsers = () => {
        setLoading(true)
        const getUsers = async () => {
            const collection = await loadUsers()

            setUsers(users => [...users, ...(collection.items ? collection.items : collection)])
            setLoading(false)
        }

        getUsers()
    }

    useEffect(() => {        
        setLoading(true)
        const getUsers = async () => {
            const collection = await loadUsers()

            setUsers(collection.items || [])
            maxUsersCount.current = collection.total_count || 0
            setLoading(false)
        }

        getUsers()
    }, [params])

    const next = maxUsersCount.current - users.length > 0
    return (
        <UsersContext.Provider value={{ users, error, loading, loadMoreUsers, next }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider

export const useUsers = () => useContext(UsersContext)
