import { BrowserRouter } from "react-router-dom"
import HomeRouter from "../modules/users"
import FavouriteRouter from "../modules/favourites"
import ProfileRouter from "../modules/profile"

const Router = () => (
    <BrowserRouter>
        <HomeRouter/>
        <FavouriteRouter/>
        <ProfileRouter/>
    </BrowserRouter>
)

export default Router
