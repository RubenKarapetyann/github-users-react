import { NavBar } from "../../Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => (
    <>
        <NavBar/>
        <Outlet/>
        {/* can be footer or smth else */}
    </>
)

export default MainLayout