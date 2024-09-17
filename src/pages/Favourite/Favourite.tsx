import { useEffect, useState } from "react";
import { InfinityUsersList } from "../../components/Lists";
import { useFavourite } from "../../contexts/FavouriteContext/FavouriteContext";
import * as styles from "../../styles/styles.scss"
import { UserOfList } from "../../types/api/users";
import { useSearch } from "../../contexts/SearchContext/SearchContext";
import useSearchDelay from "../../hooks/useSearchDelay";
import { EmptyList } from "../../components/Placeholders";
import { PAGINATION } from "../../constants/global";

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
                return setUsers(users.slice(0, PAGINATION))
            }
            setUsers(users.filter(user => new RegExp(search.value, "i").test(user.login)).slice(0, PAGINATION))
        }
        
        delayer(getUsers)
    }, [search, favourite])

    const addMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        if (!search || !favourite) return
        const { users: favouriteUsers } = favourite

        if (!search.value) {
            return setUsers(users => [...users, ...favouriteUsers.slice(page * PAGINATION, page * PAGINATION + PAGINATION)])
        }
        setUsers(users => [...users, ...favouriteUsers.filter(user => new RegExp(search.value, "i").test(user.login)).slice(page * PAGINATION, page * PAGINATION + PAGINATION)])
    }

    return (
        <div className={styles.container}>
            {
                favourite?.users.length ? 
                // <UsersList users={users} /> :
                <InfinityUsersList scrollCallback={addMoreUsers} users={users} next={favourite.users.length - users.length > 0}/> :
                <EmptyList/>
            }
        </div>
    )
}