import { FavouriteSliceState } from "./types"

export const FAVOURITE_SLICE = "favourites"
export const initialState: FavouriteSliceState = {
    users: [],
    next: false,
}