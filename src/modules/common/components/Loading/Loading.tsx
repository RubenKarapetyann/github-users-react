import { FaSpinner } from "react-icons/fa"
import * as styles from "./Loading.module.scss"

// Add Loading step when fetch data or paginate data
// Add debounce for loading for keep at least 300 ms showing
const Loading = () => (
    <div className={styles.container}>
        <FaSpinner className={styles.circle}/>
    </div>
)

export default Loading