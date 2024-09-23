import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const ProfileLazy = lazy(() => import("./components"))

const ProfileRouter = () => (        
    <Routes>
        <Route
            path="users"
            element={<Layout/>}
        >
            <Route path=":login" element={<ProfileLazy/>}/>
        </Route>
    </Routes>
)

export { ProfileRouter as default }
