import { FaSpinner } from "react-icons/fa"
import * as styles from "./Loading.module.scss"

const Loading = () => (
    <div className={styles.container}>
        <FaSpinner className={styles.circle}/>
    </div>
)

export default Loading