import { USERS_ENDPOINT } from "../../common/constants/api"
import { getData } from "../../common/services"
import { User } from "../../common/types/users"

const getProfile = async (login: string): Promise<User> => {
    return await getData({ url: `${USERS_ENDPOINT}/${login}` })
}

export default getProfile
