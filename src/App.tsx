import { Suspense } from "react"
import Router from "./routing/Router"
import { Loading } from "./modules/common/components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading isLoading={false}/>}>
                <Router />
            </Suspense>
        </QueryClientProvider>
    )
}

export default App