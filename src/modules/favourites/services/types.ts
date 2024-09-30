import { UserOfList } from "../../common/types/users"

export interface GetFavouriteUsersProps {
    search?: string | null,
    perPage?: number,
    page?: number
}

export interface GetFavouriteUsersReturnType {
    users: UserOfList[],
    total_count: number
}