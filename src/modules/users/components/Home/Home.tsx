import * as styles from "../../../common/styles/styles.scss"
import { Exception, InfinityUsersList, Loading } from "../../../common/components";
import { removeUserFromFavourites } from "../../../favourites/services";
import { useUsers } from "../../contexts/UsersContext";

export default function Home() {
    const usersContext = useUsers()
    if (!usersContext) {
        return
    }

    const { loading, users, error, loadMoreUsers, next, tryAgain } = usersContext
    return (
        <>
            <Loading isLoading={loading}/>
            {error && <Exception message={error} onTryAgain={tryAgain}/>}
            {!error && <div className={styles.container}>
                <InfinityUsersList 
                    users={users} 
                    scrollCallback={loadMoreUsers} 
                    next={next}
                    onDeactiveStar={(id: number) => removeUserFromFavourites(id)}
                />
            </div>}
        </>
    )
}