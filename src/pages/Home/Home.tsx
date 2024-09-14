import { useEffect, useState } from "react";
import { UsersList } from "../../components/Lists";
import { UserOfList } from "../../types/api/users";
import getData from "../../utils/api/getData";
import { SEARCH_USERS_URL, USERS_ENDPOINT } from "../../constants/api";
import * as styles from "../../styles/styles.scss"
import { useSearch } from "../../contexts/SearchContext/SearchContext";

export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const search = useSearch()

    useEffect(() => {
        if (!search) return
        const { value } = search

        const getUsers = async () => {
            const collection = await getData({ url: 
                value ? `${SEARCH_USERS_URL}?q=${value}` : USERS_ENDPOINT
            })
            setUsers(users => collection.items ? collection.items : collection) // [...users, ...collection]
        }

        getUsers()
    }, [search])
    
    return <div className={styles.container}><UsersList users={users}/></div>
}