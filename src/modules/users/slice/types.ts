import { UserOfList } from "../../common/types/users";

export interface UsersSliceState {
    users: UserOfList[],
    loading: boolean,
    error: null | string,
    next: boolean
}