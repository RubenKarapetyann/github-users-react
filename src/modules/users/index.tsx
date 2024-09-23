import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AdvancedSearchLayout from "./AdvancedSearchLayout";

const HomeLazy = lazy(() => import("./components"))

const HomeRouter = () => (        
    <Routes>
        <Route 
            path="/"
            element={<AdvancedSearchLayout/>}
        >
            <Route index element={<HomeLazy/>}/>
        </Route>
    </Routes>
)

export { HomeRouter as default }