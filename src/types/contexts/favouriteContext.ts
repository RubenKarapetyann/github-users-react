import { UserOfList } from "../api/users";

export interface FavouritehContextType {
    users: UserOfList[],
    addUser: (user: UserOfList) => void,
    removeUser: (id: number) => void
}