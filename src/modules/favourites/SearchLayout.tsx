import { Outlet } from "react-router-dom"
import { NavBar, SearchHeader } from "../common/components"

const SearchLayout = () => (
    <>
        <NavBar/>
        <SearchHeader/>
        <Outlet/>
        {/* can be footer or smth else */}
    </>
)

export default SearchLayout