import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const FavouriteLazy = lazy(() => import("./components"))

const FavouriteRouter = () => (        
    <Routes>
        <Route         
            path="favourite"
            element={<Layout/>}
        >
            <Route index element={<FavouriteLazy/>}/>
        </Route>  
    </Routes>
)

export { FavouriteRouter as default }
