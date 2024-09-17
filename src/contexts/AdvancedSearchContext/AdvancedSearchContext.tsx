import { createContext, ReactNode, useContext, useState } from "react";
import { AdvancedSearchContextType, Filters } from "../../types/contexts/advancedSearchContext";
import { FILTERS_MAP, MAX_FOLLOWS, MAX_REP, MIN_FOLLOWS, MIN_REP } from "../../constants/filters";

const AdvancedSearchContext = createContext<AdvancedSearchContextType | null>(null)

const AdvancedSearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<Filters>({
        minRep: FILTERS_MAP[MIN_REP].initialValue,
        maxRep: FILTERS_MAP[MAX_REP].initialValue,
        minFollows: FILTERS_MAP[MIN_FOLLOWS].initialValue,
        maxFollows: FILTERS_MAP[MAX_FOLLOWS].initialValue
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