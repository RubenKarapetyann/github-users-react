import { IExceptionProps } from "../../types"
import Button from "../Button/Button"
import * as styles from "./Exception.module.scss"

const Exception = ({ message, onTryAgain }: IExceptionProps) => (
    <div className={styles.container}>
        <p>{message} :(</p>
        <Button onClick={onTryAgain}>
            Try Again
        </Button>
    </div>
)

export default Exception