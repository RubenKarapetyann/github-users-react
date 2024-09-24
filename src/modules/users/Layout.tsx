import { Outlet } from "react-router-dom"
import { AdvancedSearchHeader, NavBar, SearchHeader } from "../common/components"
import UsersContextProvider from "./contexts/UsersContext"

const Layout = () => (
    <UsersContextProvider>
        <NavBar/>
        <SearchHeader>
            <AdvancedSearchHeader/>
        </SearchHeader>
        <Outlet/>
    </UsersContextProvider>
)

export default Layout