import { UserOfList } from "./users"

type onDeactiveStarType = (id: number) => void

export interface ICardProps extends UserOfList {
    onDeactiveStar: onDeactiveStarType
}

export interface ICardContextProps extends UserOfList {}

export interface IUsersListProps {
    users: UserOfList[]
}

export interface IInfinityUsersListProps extends IUsersListProps {
    scrollCallback: () => void,
    next: boolean,
    onDeactiveStar: onDeactiveStarType
}

export interface IStarProps extends UserOfList {
    onDeactiveStar: onDeactiveStarType
}

export interface ILoadingProps {
    isLoading: boolean
}

export interface IExceptionProps {
    message: string,
    onTryAgain: () => void
}