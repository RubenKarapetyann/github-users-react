import { PROFILE_SLICE } from "./config";
import profileReducer from "./reducer";
import { selectProfileNecessaries, selectRecomendedUsers } from "./selectors";
import { getProfile, getRecomendedUsers } from "./actions";

export {
    profileReducer,
    PROFILE_SLICE,
    selectProfileNecessaries,
    selectRecomendedUsers,
    getRecomendedUsers,
    getProfile
}