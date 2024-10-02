import { useQuery } from "@tanstack/react-query"
import getProfile from "../services/getProfile"

const useProfile = (login: string) => {
    return useQuery({
        queryKey: ["users", login],
        queryFn: () => getProfile(login)
    })
}

export default useProfile
