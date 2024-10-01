import { UserOfList } from "../../common/types/users"

export interface GetUsersReturnType {
    total_count: number,
    items: UserOfList[]
}

export interface GetUsersProps {
    search: string,
    filters: Record<string, string>,
    page: number
}