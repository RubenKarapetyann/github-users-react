import { Outlet } from "react-router-dom"
import { AdvancedSearchHeader, NavBar, SearchHeader } from "../common/components"

const Layout = () => (
    <>
        <NavBar/>
        <SearchHeader>
            <AdvancedSearchHeader/>
        </SearchHeader>
        <Outlet/>
    </>
)

export default Layout