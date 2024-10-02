import { GetUsersReturnType } from "../../users/services/types";
import { UserOfList } from "../types/users";

const concatUsersList = (list: GetUsersReturnType[]) => (
    list.reduce<UserOfList[]>((acc, cur) => [...acc, ...cur.items], [])
)

export default concatUsersList
