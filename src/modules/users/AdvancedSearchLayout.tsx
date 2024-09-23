import { Outlet } from "react-router-dom"
import { AdvancedSearchHeader, NavBar, SearchHeader } from "../common/components"

const AdvancedSearchLayout = () => (
    <>
        <NavBar/>
        <SearchHeader>
            <AdvancedSearchHeader/>
        </SearchHeader>
        <Outlet/>
        {/* can be footer or smth else */}
    </>
)

export default AdvancedSearchLayout