import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles/index.scss"

const rootDiv = document.getElementById("root")

const root = createRoot(rootDiv!)
root.render(<App/>)
