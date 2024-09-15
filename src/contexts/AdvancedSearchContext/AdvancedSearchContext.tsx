import { createContext, ReactNode, useContext, useState } from "react";
import { AdvancedSearchContextType, Filters } from "../../types/contexts/advancedSearchContext";

const AdvancedSearchContext = createContext<AdvancedSearchContextType | null>(null)

const AdvancedSearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<Filters>({
        minRep: 0,
        maxRep: 1000,
        minFollows: 0,
        maxFollows: 1000000
    })

    const changeFilter = (filter: string, value: number) => {
        setFilters(filters => ({...filters, [filter] : value}))
    }

    return (
        <AdvancedSearchContext.Provider value={{ filters, changeFilter }}>
            {children}
        </AdvancedSearchContext.Provider>
    )
}

export default AdvancedSearchContextProvider

export const useAdvancedSearch = () => useContext(AdvancedSearchContext)