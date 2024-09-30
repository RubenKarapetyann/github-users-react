import { useEffect } from "react"
import { IRecomendedUsersProps } from "../../types"
import UsersList from "../UsersList/UsersList"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { getRecomendedUsers, selectRecomendedUsers } from "../../slice"

const RecomendedUsers = ({ since }: IRecomendedUsersProps) => {
    const users = useAppSelector(selectRecomendedUsers)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getRecomendedUsers(since))
    }, [since])

    return <UsersList users={users}/>
}

export default RecomendedUsers