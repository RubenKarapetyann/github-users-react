import { Suspense } from "react"
import Router from "./routing/Router"
import { Loading } from "./modules/common/components"
import { Provider } from "react-redux"
import store from "./app/store"

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loading isLoading={false}/>}>
                <Router />
            </Suspense>
        </Provider>
    )
}

export default App