import { useEffect, useState } from "react";
import { UsersList } from "../../components/Lists";
import { useFavourite } from "../../contexts/FavouriteContext/FavouriteContext";
import * as styles from "../../styles/styles.scss"
import { UserOfList } from "../../types/api/users";
import { useSearch } from "../../contexts/SearchContext/SearchContext";

export default function Favourite() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const favourite = useFavourite()
    const search = useSearch()

    useEffect(() => {
        if (!favourite || !search) return
        const { users } = favourite

        if (!search.value){
            return setUsers(users)
        }
        setUsers(users.filter(user => new RegExp(search.value).test(user.login)))
    }, [search])

    
    return <div className={styles.container}><UsersList users={users}/></div>
}