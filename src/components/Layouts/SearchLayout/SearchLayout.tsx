import SearchContextProvider from "../../../contexts/SearchContext/SearchContext"
import { NavBar, SearchHeader } from "../../Header"
import { Outlet } from "react-router-dom"

const SearchLayout = () => (
    <SearchContextProvider>
        <NavBar/>
        <SearchHeader/>
        <Outlet/>
        {/* can be footer or smth else */}
    </SearchContextProvider>
)

export default SearchLayout