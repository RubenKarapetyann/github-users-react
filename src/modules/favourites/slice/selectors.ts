import { RootState } from "../../../store";

export const selectFavouriteNecessaries = (state: RootState) => ({
    users: state.favourites.users,
    next: state.favourites.next
})