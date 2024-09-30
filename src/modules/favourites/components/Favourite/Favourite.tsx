import * as styles from "../../../common/styles/styles.scss"
import EmptyList from "../EmptyList/EmptyList";
import { InfinityUsersList } from "../../../common/components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectFavouriteNecessaries } from "../../slice/selectors";
import { useEffect } from "react";
import { useSearchAndFilters } from "../../../common/hooks";
import { addMoreFavouriteUsers, removeFavouriteUser } from "../../slice";
import { PAGINATION } from "../../../common/constants/api";

export default function Favourite() {
    const { users, next } = useAppSelector(selectFavouriteNecessaries)
    const page = Math.ceil(users.length / PAGINATION)
    const { search } = useSearchAndFilters()
    const dispatch = useAppDispatch()    

    const addMoreUsers = () => dispatch(addMoreFavouriteUsers({
        page, search: search || "", replace: false
    }))

    const removeUser = (id: number) => dispatch(removeFavouriteUser(id))

    useEffect(() => {
        dispatch(addMoreFavouriteUsers({
            page: 0, search: search || "", replace: true
        }))
    }, [search])

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