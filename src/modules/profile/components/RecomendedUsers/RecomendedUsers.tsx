import { useEffect, useState } from "react"
import { IRecomendedUsersProps } from "../../types"
import { USERS_ENDPOINT } from "../../../common/constants/api"
import UsersList from "../UsersList/UsersList"
import { getData } from "../../../common/services"
import { UserOfList } from "../../../common/types/users"

const RecomendedUsers = ({ since }: IRecomendedUsersProps) => {
    const [users, setUsers] = useState<UserOfList[]>([])

    useEffect(() => {
        const getUsers = async () => {
            const collection = await getData({ url: `${USERS_ENDPOINT}?per_page=3&since=${since}` })
            setUsers(collection)
        }

        getUsers()
    }, [since])

    return <UsersList users={users}/>
}

export default RecomendedUsers