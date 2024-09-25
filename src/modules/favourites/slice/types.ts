import { UserOfList } from "../../common/types/users";

export interface FavouriteSliceState {
    users: UserOfList[],
    next: boolean,
}
