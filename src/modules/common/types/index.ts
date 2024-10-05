import { HTMLAttributes, MouseEventHandler, PropsWithChildren, ReactNode } from "react"
import { UserOfList } from "./users"
import { PALETTE } from "../constants/palette"

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

export interface IStarProps extends ICardProps {}

export interface ILoadingProps {
    isLoading: boolean
}

export interface IExceptionProps {
    message: string,
    onTryAgain: () => void
}

export interface IModalProps extends PropsWithChildren {
    onClose?: () => void,
    isOpen: boolean,
    closeIfClickedOutside?: boolean,
    title?: ReactNode,
    footer?: ReactNode
}

export type IModal2Props = Pick<IModalProps, "children" | "onClose" | "isOpen" | "closeIfClickedOutside">
export interface ICloseButtonProps extends PropsWithChildren {
    onClose?: () => void
}

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    onClick: MouseEventHandler<HTMLButtonElement>,
    color?: PALETTE
}