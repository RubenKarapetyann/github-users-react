import { useEffect, useState } from "react";
import { InfinityUsersList } from "../../components/Lists";
import { UserOfList } from "../../types/api/users";
import getData from "../../utils/api/getData";
import { SEARCH_USERS_URL, USERS_ENDPOINT } from "../../constants/api";
import * as styles from "../../styles/styles.scss"
import { useSearch } from "../../contexts/SearchContext/SearchContext";
import useSearchDelay from "../../hooks/useSearchDelay";
import { PAGINATION } from "../../constants/global";
import { Loading } from "../../components/Placeholders";
import { useAdvancedSearch } from "../../contexts/AdvancedSearchContext/AdvancedSearchContext";

export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const search = useSearch()
    const filters = useAdvancedSearch()
    const delayer = useSearchDelay()

    useEffect(() => {
        if (!search || !filters) return
        const { value } = search
        const currentFilters = filters.filters

        const getUsers = async () => {
            const collection = await getData({ url: 
                `${SEARCH_USERS_URL}?q=${value ? value + "+" : ""}repos:${currentFilters.minRep}..${currentFilters.maxRep}+followers:${currentFilters.minFollows}..${currentFilters.maxFollows}&per_page=${PAGINATION}`
            })
            setUsers(collection.items)
        }

        delayer(getUsers)
    }, [search, filters])

    
    const loadMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        if (!search || !filters) return
        const { value } = search
        const currentFilters = filters.filters

        const getUsers = async () => {
            const collection = await getData({ url: 
                `${SEARCH_USERS_URL}?q=${value ? value + "+" : ""}repos:${currentFilters.minRep}..${currentFilters.maxRep}+followers:${currentFilters.minFollows}..${currentFilters.maxFollows}&per_page=${PAGINATION}&page=${page + 1}`
            })

            // `${SEARCH_USERS_URL}?q=${value}&per_page=${PAGINATION}&page=${page + 1}` : 
            // `${USERS_ENDPOINT}?per_page=${PAGINATION}&since=${users[users.length - 1].id}`
            setUsers(users => [...users, ...(collection.items ? collection.items : collection)])
        }
        getUsers()
    }
    
    if (!users.length){
        return <div><Loading/></div>
    }

    return (
        <div className={styles.container}>
            <InfinityUsersList users={users} scrollCallback={loadMoreUsers}/>
        </div>
    )
}