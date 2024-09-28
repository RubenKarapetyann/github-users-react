import { User, UserOfList } from "../../common/types/users";

export interface ProfileSliceState {
    user: User | null,
    loading: boolean,
    error: string | null,
    recomendedUsers: UserOfList[]
}

export interface ProfileRejectedProps {
    error: Error
}