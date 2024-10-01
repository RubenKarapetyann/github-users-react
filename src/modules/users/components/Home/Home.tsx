import * as styles from "../../../common/styles/styles.scss"
import { Exception, InfinityUsersList, Loading } from "../../../common/components";
import { removeUserFromFavourites } from "../../../favourites/services";
import { useSearchAndFilters } from "../../../common/hooks";
import { useUsers } from "../../hooks";

export default function Home() {
    const { search, filters } = useSearchAndFilters()
    const {
        error,
        isLoading,
        loadMoreUsers,
        users,
        next
    } = useUsers(search || "", filters)   
        
    return (
        <>
            <Loading isLoading={isLoading}/>
            {error && <Exception message={error.message} onTryAgain={loadMoreUsers}/>} 
            {!error && users && <div className={styles.container}>
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