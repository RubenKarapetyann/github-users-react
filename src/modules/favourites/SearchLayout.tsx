import { Outlet } from "react-router-dom"
import SearchContextProvider from "../../contexts/SearchContext/SearchContext"
import { NavBar, SearchHeader } from "../common/components"

const SearchLayout = () => (
    <SearchContextProvider>
        <NavBar/>
        <SearchHeader/>
        <Outlet/>
        {/* can be footer or smth else */}
    </SearchContextProvider>
)

export default SearchLayout