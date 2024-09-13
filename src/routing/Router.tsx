import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from "./routes"
import MainLayout from "../components/Layouts/MainLayout/MainLayout"

const router = createBrowserRouter([{
    element: <MainLayout/>,
    children: ROUTES
}])

const Router = () => <RouterProvider router={router}/>

export default Router
