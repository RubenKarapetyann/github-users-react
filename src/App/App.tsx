import { Suspense } from "react"
import Router from "../routing/Router"
import { Loading } from "../modules/common/components"

function App() {
    return (
        <Suspense fallback={<Loading isLoading={false}/>}>
            <Router />
        </Suspense>
    )
}

export default App