import { useEffect, useState } from "react";
import { InfinityUsersList } from "../../components/Lists";
import { UserOfList } from "../../types/api/users";
import getData from "../../utils/api/getData";
import { SEARCH_USERS_URL, USERS_ENDPOINT } from "../../constants/api";
import * as styles from "../../styles/styles.scss"
import { useSearch } from "../../contexts/SearchContext/SearchContext";
import useSearchDelay from "../../hooks/useSearchDelay";
import { PAGINATION } from "../../constants/global";
import Loading from "../../components/Placeholders/Loading/Loading";

export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const search = useSearch()
    const delayer = useSearchDelay()

    useEffect(() => {
        if (!search) return
        const { value } = search

        const getUsers = async () => {
            const collection = await getData({ url: 
                value ? `${SEARCH_USERS_URL}?q=${value}&per_page=${PAGINATION}` : `${USERS_ENDPOINT}?per_page=${PAGINATION}`
            })
            setUsers(collection.items ? collection.items : collection)
        }

        delayer(getUsers)
    }, [search])

    
    const loadMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        if (!search) return
        const { value } = search

        const getUsers = async () => {
            const collection = await getData({ url: 
                value ? 
                `${SEARCH_USERS_URL}?q=${value}&per_page=${PAGINATION}&page=${page + 1}` : 
                `${USERS_ENDPOINT}?per_page=${PAGINATION}&since=${users[users.length - 1].id}`
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
            <InfinityUsersList users={users} scrollCallback={loadMoreUsers}/>
        </div>
    )
}