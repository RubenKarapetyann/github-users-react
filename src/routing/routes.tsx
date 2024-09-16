import { RouteObject } from "react-router-dom"
import { AdvancedSearchLayout, MainLayout, SearchLayout } from "../components/Layouts"

const HOME: RouteObject = {
    path: "/",
    async lazy() {
        const { Home } = await import("../pages/index");
        return { Component: Home };
    }
}

const FAVOURITE: RouteObject = {
    path: "/favourite",
    async lazy() {
        const { Favourite } = await import("../pages/index");
        return { Component: Favourite };
    }
}

const PROFILE: RouteObject = {
    path: "/users/:login",
    async lazy() {
        const { Profile } = await import("../pages/index");
        return { Component: Profile };
    }
}

const ROUTES: RouteObject[] = [
    {
        element: <MainLayout/>,
        children: [ PROFILE ]
    },
    {
        element: <SearchLayout/>,
        children: [ FAVOURITE ]
    },
    {
        element: <AdvancedSearchLayout/>,
        children: [ HOME ]
    }
]

export default ROUTES