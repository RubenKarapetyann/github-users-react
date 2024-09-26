import { IExceptionProps } from "../../types"
import * as styles from "./Exception.module.scss"

const Exception = ({ message, onTryAgain }: IExceptionProps) => (
    <div className={styles.container}>
        <p>{message} :(</p>
        <button onClick={onTryAgain}>Try Again</button>
    </div>
)

export default Exception