import * as styles from "../../../common/styles/styles.module.scss"
import EmptyList from "../EmptyList/EmptyList";
import { InfinityUsersList } from "../../../common/components";
import { useFavourite } from "../../contexts/FavouriteContext";

export default function Favourite() {
    const favourite = useFavourite()
    if (!favourite) {
        return null
    }

    const { users, removeUser, addMoreUsers, next } = favourite

    return (
        <div className={styles.container}>
            {
                users.length ? 
                <InfinityUsersList
                    scrollCallback={addMoreUsers}
                    users={users}
                    next={next}
                    onDeactiveStar={removeUser}
                /> :
                <EmptyList/>
            }
        </div>
    )
}