import FavouriteContextProvider from "../../contexts/FavouriteContext/FavouriteContext"
import SearchContextProvider from "../../contexts/SearchContext/SearchContext"
import Router from "../../routing/Router"
import * as styles from "./App.module.scss"

function App() {
    return (
        <FavouriteContextProvider>
            <SearchContextProvider>
                <Router/>
            </SearchContextProvider>
        </FavouriteContextProvider>
    )
}

export default App