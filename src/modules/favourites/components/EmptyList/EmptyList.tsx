import { memo } from "react"
import * as styles from "./EmptyList.module.scss"

const EmptyList = () => (
    <div className={styles.container}>
        <p>There are not users yet!</p>
    </div>
)

export default memo(EmptyList)