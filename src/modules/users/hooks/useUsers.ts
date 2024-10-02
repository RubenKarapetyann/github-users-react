import { useInfiniteQuery } from "@tanstack/react-query"
import { getUsers } from "../services"
import { concatUsersList } from "../../common/services"

const useUsers = (search: string, filters: Record<string, string>) => {
    return useInfiniteQuery({
        queryKey: ["users"],
        queryFn: async ({ pageParam }) => await getUsers({ search, filters, page: pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const users = concatUsersList(allPages)

            if (lastPage.total_count > users?.length) {
                return allPages.length + 1
            }
        },
    })
}

export default useUsers