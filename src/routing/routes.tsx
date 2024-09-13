import { Route } from "../types/constants/routes"

const HOME: Route = {
    path: "/home",
    element: <>home</>,
    id: 1
}

const FAVOURITE: Route = {
    path: "/favourite",
    element: <>favourite</>,
    id: 2
}

const ROUTES: Route[] = [HOME, FAVOURITE]

export default ROUTES