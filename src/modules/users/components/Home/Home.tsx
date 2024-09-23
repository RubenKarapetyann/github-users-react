import { useEffect, useRef, useState } from "react";
import * as styles from "../../../../styles/styles.scss"
import { InfinityUsersList, Loading } from "../../../common/components";
import { UserOfList } from "../../../common/types/users";
import { getData } from "../../../common/services";
import { PAGINATION, SEARCH_USERS_URL } from "../../../common/constants/api";
import { useSearch } from "../../../../contexts/SearchContext/SearchContext";
import { useSearchDelay } from "../../../common/hooks";
import { useAdvancedSearch } from "../../../../contexts/AdvancedSearchContext/AdvancedSearchContext";

// UsersContext
 // getUsers(){paramas}
 // return users, loading, error;


export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const maxUsersCount = useRef<number>(0)
    const search = useSearch()
    const filters = useAdvancedSearch()
    const delayer = useSearchDelay()

    useEffect(() => {
        if (!search || !filters) return
        const { value } = search
        const currentFilters = filters.filters

        // Remove duplications
        const getUsers = async () => {
            const collection = await getData({ url: 
                `${SEARCH_USERS_URL}?q=${value ? value : "a" /* for avoiding github api bug (will explain) */ }+repos:${currentFilters.minRep}..${currentFilters.maxRep}+followers:${currentFilters.minFollows}..${currentFilters.maxFollows}&per_page=${PAGINATION}&sort=joined&order=asc`
            })
            setUsers(collection.items || [])
            maxUsersCount.current = collection.total_count || 0
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
                `${SEARCH_USERS_URL}?q=${value ? value : "a" /* for avoiding github api bug (will explain) */ }+repos:${currentFilters.minRep}..${currentFilters.maxRep}+followers:${currentFilters.minFollows}..${currentFilters.maxFollows}&per_page=${PAGINATION}&page=${page + 1}&sort=joined&order=asc`
            })

            setUsers(users => [...users, ...(collection.items ? collection.items : collection)])
        }
        getUsers()
    }
    
    if (!users.length){
        return <div><Loading/></div>
    }

    return (
        <div className={styles.container}>
            <InfinityUsersList users={users} scrollCallback={loadMoreUsers} next={maxUsersCount.current - users.length > 0}/>
        </div>
    )
}