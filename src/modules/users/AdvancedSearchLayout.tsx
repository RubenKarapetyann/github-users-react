import { Outlet } from "react-router-dom"
import AdvancedSearchContextProvider from "../../contexts/AdvancedSearchContext/AdvancedSearchContext"
import SearchContextProvider from "../../contexts/SearchContext/SearchContext"
import { AdvancedSearchHeader, NavBar, SearchHeader } from "../common/components"

const AdvancedSearchLayout = () => (
    <AdvancedSearchContextProvider>
        <SearchContextProvider>
            <NavBar/>
            <SearchHeader>
                <AdvancedSearchHeader/>
            </SearchHeader>
            <Outlet/>
            {/* can be footer or smth else */}
        </SearchContextProvider>
    </AdvancedSearchContextProvider>
)

export default AdvancedSearchLayout