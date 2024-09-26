import { IExceptionProps } from "../../types"
import * as styles from "./Exception.module.scss"

const Exception = ({ error, onTryAgain }: IExceptionProps) => (
    error && 
    <div className={styles.container}>
        <p>{error} :(</p>
        <button onClick={onTryAgain}>Try Again</button>
    </div>
)

export default Exception