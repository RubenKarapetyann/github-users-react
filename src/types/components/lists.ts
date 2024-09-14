import { UserOfList } from "../api/users";

export type CardProps = UserOfList

export interface UsersListProps {
    users: UserOfList[]
}

export interface InfinityUsersListProps extends UsersListProps {
    scrollCallback: () => void
}

export interface StarProps {
    user: UserOfList
}

export interface RecomendedUsersProps {
    since: number
}