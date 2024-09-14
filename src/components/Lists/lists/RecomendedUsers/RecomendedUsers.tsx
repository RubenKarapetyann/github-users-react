import { useEffect, useState } from "react"
import { UserOfList } from "../../../../types/api/users"
import UsersList from "../UsersList/UsersList"
import getData from "../../../../utils/api/getData"
import { USERS_ENDPOINT } from "../../../../constants/api"
import { RecomendedUsersProps } from "../../../../types/components/lists"

const RecomendedUsers = ({ since }: RecomendedUsersProps) => {
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