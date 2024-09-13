import { RouteObject } from "react-router-dom"
import Home from "../pages/Home/Home"
import Favourite from "../pages/Favourite/Favourite"

const HOME: RouteObject = {
    path: "/",
    element: <Home/>,
}

const FAVOURITE: RouteObject = {
    path: "/favourite",
    element: <Favourite/>,
}

const ROUTES: RouteObject[] = [HOME, FAVOURITE]

export default ROUTES