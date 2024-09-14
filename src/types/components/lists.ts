import { UserOfList } from "../api/users";

export type CardProps = UserOfList

export interface UsersListProps {
    users: UserOfList[]
}

export interface StarProps {
    user: UserOfList
}

export interface RecomendedUsersProps {
    since: number
}