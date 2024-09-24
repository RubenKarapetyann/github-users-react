import { UserOfList } from "../../../common/types/users";

export interface FavouritehContextType {
    users: UserOfList[],
    removeUser: (id: number) => void,
    addMoreUsers: () => void,
    next: boolean
}