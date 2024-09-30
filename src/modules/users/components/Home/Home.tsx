import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import * as styles from "../../../common/styles/styles.scss"
import { Exception, InfinityUsersList, Loading } from "../../../common/components";
import { removeUserFromFavourites } from "../../../favourites/services";
import { useSearchAndFilters } from "../../../common/hooks";
import { PAGINATION } from "../../../common/constants/api";
import { getUsers, selectHomeNecessaries } from "../../slice";

export default function Home() {
    const { loading, users, error, next } = useAppSelector(selectHomeNecessaries)
    const page = Math.ceil(users.length / PAGINATION) + 1
    const dispatch = useAppDispatch()
    const { search, filters } = useSearchAndFilters()

    const loadMoreUsers = () => {        
        dispatch(getUsers({ search, filters, page }))
    }

    useEffect(() => {
        dispatch(getUsers({ search, filters, page, replace: true }))
    }, [location.search])

    return (
        <>
            <Loading isLoading={loading}/>
            {users && !error &&
            <div className={styles.container}>
                <InfinityUsersList 
                    users={users} 
                    scrollCallback={loadMoreUsers} 
                    next={next}
                    onDeactiveStar={(id: number) => removeUserFromFavourites(id)}
                />
            </div>}
            <Exception error={error} onTryAgain={() => dispatch(getUsers({ search, filters, page, replace: true }))}/>
        </>
    )
}