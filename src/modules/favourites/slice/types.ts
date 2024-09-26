import { UserOfList } from "../../common/types/users";

export interface FavouriteSliceState {
    users: UserOfList[],
    next: boolean,
}

export interface AddMoreFavouriteUsersType {
    replace: boolean,
    page: number,
    search: string
}