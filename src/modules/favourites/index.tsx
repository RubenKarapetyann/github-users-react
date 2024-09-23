import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SearchLayout from "./SearchLayout";

const FavouriteLazy = lazy(() => import("./components"))

const FavouriteRouter = () => (        
    <Routes>
        <Route         
            path="favourites"
            element={<SearchLayout/>}
        >
            <Route index element={<FavouriteLazy/>}/>
        </Route>  
    </Routes>
)

export { FavouriteRouter as default }
