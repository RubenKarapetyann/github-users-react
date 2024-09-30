import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const HomeLazy = lazy(() => import("./components"))

const UserRouter = () => (        
    <Routes>
        <Route 
            path="/"
            element={<Layout/>}
        >
            <Route index element={<HomeLazy/>}/>
        </Route>
    </Routes>
)

export { UserRouter as default }