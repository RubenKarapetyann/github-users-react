import { useEffect, useState } from "react";
import { UsersList } from "../../components/Lists";
import { useFavourite } from "../../contexts/FavouriteContext/FavouriteContext";
import * as styles from "../../styles/styles.scss"
import { UserOfList } from "../../types/api/users";
import { useSearch } from "../../contexts/SearchContext/SearchContext";
import useSearchDelay from "../../hooks/useSearchDelay";

export default function Favourite() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const favourite = useFavourite()
    const search = useSearch()
    const delayer = useSearchDelay()


    useEffect(() => {
        const getUsers = () => {
            if (!favourite || !search) return
            const { users } = favourite
    
            if (!search.value) {
                return setUsers(users)
            }
            setUsers(users.filter(user => new RegExp(search.value, "i").test(user.login)))
        }
        
        delayer(getUsers)
    }, [search, favourite])


    return (
        <div className={styles.container}>
            {
                favourite?.users.length ? 
                <UsersList users={users} /> :
                <h3>there are not users yet !</h3>
            }
        </div>
    )
}