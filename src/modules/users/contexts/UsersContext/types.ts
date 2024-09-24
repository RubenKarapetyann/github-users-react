import { UserOfList } from "../../../common/types/users";

export interface UsersContextType {
    users: UserOfList[],
    loading: boolean,
    error: null | string,
    loadMoreUsers: () => void,
    next: boolean
}