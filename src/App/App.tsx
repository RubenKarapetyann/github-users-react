import { Suspense } from "react"
import Router from "../routing/Router"
import { Loading } from "../modules/common/components"
import FavouriteContextProvider from "../modules/favourites/contexts/FavouriteContext"

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