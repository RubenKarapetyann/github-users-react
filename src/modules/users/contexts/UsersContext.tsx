import { createContext, useContext, useState, PropsWithChildren } from "react"
import { UsersContextType } from "./types"
import { UserOfList } from "../../common/types/users"

const UsersContext = createContext<UsersContextType | null>(null)

const UsersContextProvider = ({ children }: PropsWithChildren) => {
    const [users, setUsers] = useState<UserOfList[]>([])
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <UsersContext.Provider value={{ users, error, loading }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider

export const useUsers = () => useContext(UsersContext)
