import { RootState } from "../../../app/store";

export const selectFavouriteNecessaries = (state: RootState) => ({
    users: state.favourites.users,
    next: state.favourites.next
})