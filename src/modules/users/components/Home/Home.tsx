import * as styles from "../../../../styles/styles.scss"
import { InfinityUsersList, Loading } from "../../../common/components";
import { removeUserFromFavourites } from "../../../favourites/services";
import { useUsers } from "../../contexts/UsersContext";


export default function Home() {
    const usersContext = useUsers()
    if (!usersContext) {
        return
    }

    const { loading, users, error, loadMoreUsers, next } = usersContext

    if (error) {
        return <span>{error}</span> // created an error element
    }

    return (
        <div className={styles.container}>
            {loading && <Loading/>}
            <InfinityUsersList 
                users={users} 
                scrollCallback={loadMoreUsers} 
                next={next}
                onDeactiveStar={(id: number) => removeUserFromFavourites(id)}
            />
        </div>
    )
}