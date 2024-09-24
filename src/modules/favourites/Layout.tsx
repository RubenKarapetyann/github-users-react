import { Outlet } from "react-router-dom"
import { NavBar, SearchHeader } from "../common/components"
import FavouriteContextProvider from "./contexts/FavouriteContext"

const Layout = () => (
    <FavouriteContextProvider>
        <NavBar/>
        <SearchHeader/>
        <Outlet/>
        {/* can be footer or smth else */}
    </FavouriteContextProvider>
)

export default Layout