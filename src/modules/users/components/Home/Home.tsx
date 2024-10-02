import * as styles from "../../../common/styles/styles.scss"
import { Exception, InfinityUsersList, Loading } from "../../../common/components";
import { removeUserFromFavourites } from "../../../favourites/services";
import { useSearchAndFilters } from "../../../common/hooks";
import { useUsers } from "../../hooks";
import { concatUsersList } from "../../../common/services";

export default function Home() {
    const { search, filters } = useSearchAndFilters()
    const {
        error,
        isLoading,
        isFetchingNextPage,
        data,
        fetchNextPage: loadMoreUsers,
        hasNextPage: next
    } = useUsers(search || "", filters)

    const loading = isLoading || isFetchingNextPage
    const users = data?.pages ? concatUsersList(data?.pages) : []

    return (
        <>
            <Loading isLoading={loading} />
            {error && <Exception message={error.message} onTryAgain={loadMoreUsers} />}
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