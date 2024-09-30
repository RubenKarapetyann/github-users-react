import { RootState } from "../../../store";

export const selectProfileNecessaries = (state: RootState) => ({
    user: state.profile.user,
    loading: state.profile.loading,
    error: state.profile.error
})

export const selectRecomendedUsers = (state: RootState) => state.profile.recomendedUsers