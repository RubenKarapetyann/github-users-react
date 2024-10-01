import { useInfiniteQuery } from "@tanstack/react-query"
import { getUsers } from "../services"
import { UserOfList } from "../../common/types/users"

const useUsers = (search: string, filters: Record<string, string>) => {
    const { 
        error, 
        isLoading, 
        data, 
        fetchNextPage, 
        isFetchingNextPage,
        hasNextPage
    } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: async ({ pageParam }) => await getUsers({ search: search || "", filters, page: pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => { 
            const users = allPages.reduce<UserOfList[]>((acc, cur) => [...acc, ...cur.items], [])

            if (lastPage.total_count > users?.length) {
                return allPages.length + 1
            }
        },
    })

    return {
        error,
        isLoading: isLoading || isFetchingNextPage,
        users: data?.pages.reduce<UserOfList[]>((acc, cur) => [...acc, ...cur.items], []),
        loadMoreUsers: fetchNextPage,
        next: hasNextPage
    }
}

export default useUsers