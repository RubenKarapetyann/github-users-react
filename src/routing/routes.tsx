import { RouteObject } from "react-router-dom"
import Home from "../pages/Home/Home"
import Favourite from "../pages/Favourite/Favourite"
import Profile from "../pages/Profile/Profile"
import { MainLayout, SearchLayout } from "../components/Layouts"

const HOME: RouteObject = {
    path: "/",
    element: <Home/>,
}

const FAVOURITE: RouteObject = {
    path: "/favourite",
    element: <Favourite/>,
}

const PROFILE: RouteObject = {
    path: "/users/:login",
    element: <Profile/>
}

const ROUTES: RouteObject[] = [
    {
        element: <MainLayout/>,
        children: [ PROFILE ]
    },
    {
        element: <SearchLayout/>,
        children: [ HOME, FAVOURITE ]
    },
    {}
]

export default ROUTES