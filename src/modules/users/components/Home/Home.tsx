import { useEffect, useRef, useState } from "react";
import * as styles from "../../../../styles/styles.scss"
import { InfinityUsersList, Loading } from "../../../common/components";
import { UserOfList } from "../../../common/types/users";
import { buildUrl, getData } from "../../../common/services";
import { PAGINATION, SEARCH_USERS_URL } from "../../../common/constants/api";
import { useSearchParams } from "react-router-dom";
import FILTERS from "../../../common/constants/filters";

// UsersContext
 // getUsers(){paramas}
 // return users, loading, error;


export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const maxUsersCount = useRef<number>(0)
    const [ params ] = useSearchParams()

    const search = params.get("q")
    const currentFilters: Record<string, string> = {}
    FILTERS.map(filter => {
        currentFilters[filter.name] = params.get(filter.name) || filter.initialValue.toString()
    })
    
    const loadMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        const getUsers = async () => {
            const collection = await getData({ url: 
                buildUrl({ 
                    url: SEARCH_USERS_URL, 
                    search, 
                    filters: currentFilters,
                    perPage: PAGINATION,
                    sort: true,
                    page: page + 1
                })
            })

            setUsers(users => [...users, ...(collection.items ? collection.items : collection)])
        }
        getUsers()
    }

    useEffect(() => {        
        const getUsers = async () => {
            const collection = await getData({ url: 
                buildUrl({ 
                    url: SEARCH_USERS_URL, 
                    search, 
                    filters: currentFilters,
                    perPage: PAGINATION,
                    sort: true,
                })
            })
            setUsers(collection.items || [])
            maxUsersCount.current = collection.total_count || 0
        }

        getUsers()
    }, [params])

    
    if (!users.length){
        return <div><Loading/></div>
    }

    return (
        <div className={styles.container}>
            <InfinityUsersList users={users} scrollCallback={loadMoreUsers} next={maxUsersCount.current - users.length > 0}/>
        </div>
    )
}