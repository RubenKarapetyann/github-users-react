import { useEffect, useState } from "react";
import * as styles from "../../../../styles/styles.scss"
import { PAGINATION } from "../../../common/constants/api";
import EmptyList from "../EmptyList/EmptyList";
import { useSearchDelay } from "../../../common/hooks";
import { useSearch } from "../../../../contexts/SearchContext/SearchContext";
import { UserOfList } from "../../../common/types/users";
import { useFavourite } from "../../../../contexts/FavouriteContext/FavouriteContext";
import { InfinityUsersList } from "../../../common/components";

export default function Favourite() {
    const [users, setUsers] = useState<UserOfList[]>([])
    const favourite = useFavourite()
    const search = useSearch()
    const delayer = useSearchDelay()


    const addMoreUsers = () => {
        const page = Math.ceil(users.length / PAGINATION)

        if (!search || !favourite) {
            return
        }

        let tempUsers = [...users];

        const { users: favouriteUsers } = favourite

        if (!search.value) {
            tempUsers = [...users, ...favouriteUsers.slice(page * PAGINATION, page * PAGINATION + PAGINATION)]
        } else {
            tempUsers = [...users, ...favouriteUsers.filter(user => new RegExp(search.value, "i").test(user.login)).slice(page * PAGINATION, page * PAGINATION + PAGINATION)]
        }
        setUsers(tempUsers)
    }

    useEffect(() => {
        const getUsers = () => {
            if (!favourite || !search) return
            const { users } = favourite
    
            if (!search.value) {
                return setUsers(users.slice(0, PAGINATION))
            }
                // Remove duplications (filter, test, slice)
            setUsers(users.filter(user => new RegExp(search.value, "i").test(user.login)).slice(0, PAGINATION))
        }
        
        delayer(getUsers)
    }, [search, favourite])

    return (
        <div className={styles.container}>
            {
                favourite?.users.length ? 
                // <UsersList users={users} /> :
                <InfinityUsersList
                    scrollCallback={addMoreUsers}
                    users={users}
                    next={favourite.users.length - users.length > 0}
                /> :
                <EmptyList/>
            }
        </div>
    )
}