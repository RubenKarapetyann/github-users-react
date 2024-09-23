import { Outlet } from "react-router-dom"
import AdvancedSearchContextProvider from "../../contexts/AdvancedSearchContext/AdvancedSearchContext"
import { AdvancedSearchHeader, NavBar, SearchHeader } from "../common/components"

const AdvancedSearchLayout = () => (
    <AdvancedSearchContextProvider>
        <>
            <NavBar/>
            <SearchHeader>
                <AdvancedSearchHeader/>
            </SearchHeader>
            <Outlet/>
            {/* can be footer or smth else */}
        </>
    </AdvancedSearchContextProvider>
)

export default AdvancedSearchLayout