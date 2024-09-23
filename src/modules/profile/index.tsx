import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";

const ProfileLazy = lazy(() => import("./components"))

const ProfileRouter = () => (        
    <Routes>
        <Route
            path="users"
            element={<MainLayout/>}
        >
            <Route path=":login" element={<ProfileLazy/>}/>
        </Route>
    </Routes>
)

export { ProfileRouter as default }
