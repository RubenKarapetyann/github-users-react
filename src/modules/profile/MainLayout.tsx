import { Outlet } from "react-router-dom"
import { NavBar } from "../common/components"

const MainLayout = () => (
    <>
        <NavBar/>
        <Outlet/>
        {/* can be footer or smth else */}
    </>
)

export default MainLayout