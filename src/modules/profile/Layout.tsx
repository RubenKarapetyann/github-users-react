import { Outlet } from "react-router-dom"
import { NavBar } from "../common/components"

const Layout = () => (
    <>
        <NavBar/>
        <Outlet/>
        {/* can be footer or smth else */}
    </>
)

export default Layout