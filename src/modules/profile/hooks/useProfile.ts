import { useQuery } from "@tanstack/react-query"
import getProfile from "../services/getProfile"

const useProfile = (login: string) => {
    const {
        error,
        isLoading,
        data,
        refetch
    } = useQuery({
        queryKey: ["users", login],
        queryFn: () => getProfile(login)
    })

    return {
        error,
        isLoading,
        user: data,
        refetchUserProfile: refetch
    }
}

export default useProfile
