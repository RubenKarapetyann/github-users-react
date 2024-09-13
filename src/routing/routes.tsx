import { RouteObject } from "react-router-dom"

const HOME: RouteObject = {
    path: "/",
    element: <>home</>,
}

const FAVOURITE: RouteObject = {
    path: "/favourite",
    element: <>favourite</>,
}

const ROUTES: RouteObject[] = [HOME, FAVOURITE]

export default ROUTES