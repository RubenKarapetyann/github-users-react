import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FAVOURITE_SLICE, initialState } from "./config";
import { getFavouriteUsers, removeUserFromFavourites } from "../services";

export const favouriteSlice = createSlice({
    name: FAVOURITE_SLICE,
    initialState,
    reducers: {
        removeFavouriteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
            removeUserFromFavourites(action.payload)
        },
        addMoreFavouriteUsers: (state, action: PayloadAction<{page: number, search: string, replace?: boolean}>) => {
            const moreUsers = getFavouriteUsers({ 
                page: action.payload.page,
                search: action.payload.search
            })

            if (action.payload.replace) {                
                state.users = moreUsers
            } else {                
                state.users = [...state.users, ...moreUsers]
            }    
            state.next = getFavouriteUsers({}).length - state.users.length > 0                
        }
    },
    extraReducers(builder) {}
})

const favouriteReducer = favouriteSlice.reducer
export default favouriteReducer