import { UserOfList } from "../../common/types/users";

export interface UsersSliceState {
    users: UserOfList[],
    loading: boolean,
    error: null | string,
    next: boolean,
    maxUsersCount: number
}

export interface GetUsersProps {
    page: number,
    search?: string | null,
    filters: Record<string, string>,
    replace?: boolean
}

export interface GetUsersFulfilledType {
    total_count: number,
    replace: boolean,
    items: UserOfList[]
}
