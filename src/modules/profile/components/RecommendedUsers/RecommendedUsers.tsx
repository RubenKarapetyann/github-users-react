import { useEffect, useState } from "react"
import { IRecomendedUsersProps } from "../../types"
import { USERS_ENDPOINT } from "../../../common/constants/api"
import UsersList from "../UsersList/UsersList"
import { getData } from "../../../common/services"
import { UserOfList } from "../../../common/types/users"
import { useQuery } from "@tanstack/react-query"
import { Exception } from "../../../common/components"

const RecommendedUsers = ({ since }: IRecomendedUsersProps) => {
    const {
        error,
        data: users,
        refetch
    } = useQuery<UserOfList[]>({
        queryKey: ["recommended", since],
        queryFn: () => getData({ url: `${USERS_ENDPOINT}?per_page=3&since=${since}` })
    })

    return (
        <>
            {!error && users && <UsersList users={users}/>}
            {error && <Exception message={error.message} onTryAgain={refetch}/>}
        </>
    )
}

export default RecommendedUsers