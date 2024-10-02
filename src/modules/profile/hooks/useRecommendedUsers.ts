import { useQuery } from "@tanstack/react-query"
import { getData } from "../../common/services"
import { USERS_ENDPOINT } from "../../common/constants/api"
import { UserOfList } from "../../common/types/users"

const useRecommendedUsers = (since: number) => (
    useQuery<UserOfList[]>({
        queryKey: ["recommended", since],
        queryFn: () => getData({ url: `${USERS_ENDPOINT}?per_page=3&since=${since}` })
    })
)

export default useRecommendedUsers