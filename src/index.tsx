import { createRoot } from "react-dom/client"
import App from "./App"
import "./modules/common/styles/index.scss"

const rootDiv = document.getElementById("root")

const root = createRoot(rootDiv!)
root.render(<App/>)
