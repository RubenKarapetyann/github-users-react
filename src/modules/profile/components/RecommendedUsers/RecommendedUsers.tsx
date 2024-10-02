import { IRecomendedUsersProps } from "../../types"
import UsersList from "../UsersList/UsersList"
import { Exception } from "../../../common/components"
import { useRecommendedUsers } from "../../hooks"

const RecommendedUsers = ({ since }: IRecomendedUsersProps) => {
    const {
        error,
        data: users,
        refetch
    } = useRecommendedUsers(since)

    return (
        <>
            {!error && users && <UsersList users={users}/>}
            {error && <Exception message={error.message} onTryAgain={refetch}/>}
        </>
    )
}

export default RecommendedUsers