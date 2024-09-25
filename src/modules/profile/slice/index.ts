import { PROFILE_SLICE } from "./config";
import profileReducer from "./reducer";
import { getUser } from "./thunks";
import { getRecomendedUsers } from "./thunks";
import { selectProfileNecessaries, selectRecomendedUsers } from "./selectors";

export {
    profileReducer,
    PROFILE_SLICE,
    getUser,
    getRecomendedUsers,
    selectProfileNecessaries,
    selectRecomendedUsers
}