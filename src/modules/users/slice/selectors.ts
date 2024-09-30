import { RootState } from "../../../store";

export const selectHomeNecessaries = (state: RootState) => ({
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
    next: state.users.next
})