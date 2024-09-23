import { Suspense } from "react"
import FavouriteContextProvider from "../contexts/FavouriteContext/FavouriteContext"
import Router from "../routing/Router"
import { Loading } from "../modules/common/components"

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