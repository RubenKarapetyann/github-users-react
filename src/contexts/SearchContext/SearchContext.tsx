import { createContext, ReactNode, useContext, useState } from "react";
import { SearchContextType } from "../../types/contexts/searchContext";

const SearchContext = createContext<SearchContextType | null>(null)

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<string>("")

    const changeValue = (newValue: string) => setValue(newValue)

    return (
        <SearchContext.Provider value={{value, changeValue}}>
            {children}
        </SearchContext.Provider>
    )
}


export default SearchContextProvider
export const useSearch = () => useContext(SearchContext)
