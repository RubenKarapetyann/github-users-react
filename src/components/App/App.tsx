import { Suspense } from "react"
import FavouriteContextProvider from "../../contexts/FavouriteContext/FavouriteContext"
import Router from "../../routing/Router"
import * as styles from "./App.module.scss"
import { Loading } from "../Placeholders"

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <FavouriteContextProvider>
                <Router />
            </FavouriteContextProvider>
        </Suspense>
    )
}

export default App