import { useEffect, useRef, useState } from "react";
import * as styles from "../../../../styles/styles.scss"
import { InfinityUsersList, Loading } from "../../../common/components";
import { UserOfList } from "../../../common/types/users";
import { getData } from "../../../common/services";
import { PAGINATION, SEARCH_USERS_URL } from "../../../common/constants/api";
import { useSearchParams } from "react-router-dom";

// UsersContext
 // getUsers(){paramas}
 // return users, loading, error;


export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const maxUsersCount = useRef<number>(0)
    const [ params ] = useSearchParams()

    const [ searchEntry, ...filters ] = params.entries()

    const currentFilters = filters.reduce<Record<string, string>>((acc, current) => (
        {
            ...acc,
            [current[0]] : current[1]
        }
    ), {})
    const search = searchEntry ? searchEntry[1] : ""
    
    
    const loadMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        const getUsers = async () => {
            const collection = await getData({ url: 
                `${SEARCH_USERS_URL}?q=${search ? search : "a" /* for avoiding github api bug (will explain) */ }+repos:${currentFilters.minRep || "0"}..${currentFilters.maxRep || "100000"}+followers:${currentFilters.minFollows || "0"}..${currentFilters.maxFollows || "10000"}&per_page=${PAGINATION}&page=${page + 1}&sort=joined&order=asc`
            })

            setUsers(users => [...users, ...(collection.items ? collection.items : collection)])
        }
        getUsers()
    }

    useEffect(() => {
        // Remove duplications
        const getUsers = async () => {
            const collection = await getData({ url: 
                `${SEARCH_USERS_URL}?q=${search ? search : "a" /* for avoiding github api bug (will explain) */ }+repos:${currentFilters.minRep || "0"}..${currentFilters.maxRep || "100000"}+followers:${currentFilters.minFollows || "0"}..${currentFilters.maxFollows || "10000"}&per_page=${PAGINATION}&sort=joined&order=asc`
            })
            setUsers(collection.items || [])
            maxUsersCount.current = collection.total_count || 0
        }

        getUsers()
    }, [search])

    
    if (!users.length){
        return <div><Loading/></div>
    }

    return (
        <div className={styles.container}>
            <InfinityUsersList users={users} scrollCallback={loadMoreUsers} next={maxUsersCount.current - users.length > 0}/>
        </div>
    )
}