import { BrowserRouter } from "react-router-dom"
import UserRouter from "../modules/users"
import FavouriteRouter from "../modules/favourites"
import ProfileRouter from "../modules/profile"

const Router = () => (
    <BrowserRouter>
        <UserRouter/>
        <FavouriteRouter/>
        <ProfileRouter/>
    </BrowserRouter>
)

export default Router
