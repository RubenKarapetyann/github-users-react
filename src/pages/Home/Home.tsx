import { useEffect, useState } from "react";
import { UsersList } from "../../components/Lists";
import { UserOfList } from "../../types/api/users";
import getData from "../../utils/api/getData";
import { USERS_ENDPOINT } from "../../constants/api";
import * as styles from "./Home.module.scss"

export default function Home() {
    const [users, setUsers] = useState<UserOfList[]>([])

    useEffect(() => {
        const getUsers = async () => {
            const collection = await getData({ url: USERS_ENDPOINT })
            setUsers(users => [...users, ...collection])
        }

        getUsers()
    }, [])

    return <div className={styles.container}><UsersList users={users}/></div>
}