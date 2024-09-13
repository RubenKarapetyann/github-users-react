import SearchContextProvider from "../../contexts/SearchContext/SearchContext"
import Router from "../../routing/Router"
import * as styles from "./App.module.scss"

function App() {
    return (
        <SearchContextProvider>
            <Router/>
        </SearchContextProvider>
    )
}

export default App