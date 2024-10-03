import { User } from "../common/types/users";

export interface IProfileLayoutProps extends User {
    onOpenModal: () => void
}

export interface IRecomendedUsersProps {
    since: number
}

export interface IProfileLayoutWithModalProps extends User {}

export type IModalContentProps = Pick<User, "avatar_url" | "name">