import FavouriteContextProvider from "../../contexts/FavouriteContext/FavouriteContext"
import Router from "../../routing/Router"
import * as styles from "./App.module.scss"

function App() {
    return (
        <FavouriteContextProvider>
            <Router />
        </FavouriteContextProvider>
    )
}

export default App