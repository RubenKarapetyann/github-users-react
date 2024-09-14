import { UserOfList } from "../api/users";

export type CardProps = UserOfList

export interface UsersListProps {
    users: UserOfList[]
}

export interface StarProps {
    active: boolean
}