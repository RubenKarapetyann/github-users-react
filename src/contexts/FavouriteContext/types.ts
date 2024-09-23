import { UserOfList } from "../../modules/common/types/users";

export interface FavouritehContextType {
    users: UserOfList[],
    addUser: (user: UserOfList) => void,
    removeUser: (id: number) => void
}