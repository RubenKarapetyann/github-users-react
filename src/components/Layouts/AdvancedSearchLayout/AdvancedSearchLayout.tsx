import AdvancedSearchContextProvider from "../../../contexts/AdvancedSearchContext/AdvancedSearchContext"
import SearchContextProvider from "../../../contexts/SearchContext/SearchContext"
import { AdvancedSearchHeader, NavBar, SearchHeader } from "../../Header"
import { Outlet } from "react-router-dom"

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