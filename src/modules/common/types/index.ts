import { UserOfList } from "./users"

export interface ICardProps extends UserOfList {}

export interface ICardContextProps extends UserOfList {}

export interface IUsersListProps {
    users: UserOfList[]
}

export interface IInfinityUsersListProps extends IUsersListProps {
    scrollCallback: () => void,
    next: boolean
}

export interface IStarProps extends UserOfList {}
