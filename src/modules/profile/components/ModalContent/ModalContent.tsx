import { IModalContentProps } from "../../types"
import * as styles from "./ModalContent.module.scss"

const ModalContent = ({ avatar_url, name }: IModalContentProps) => {
    return (
        <div className={styles.container}>
            <img src={avatar_url} alt="avatar" />
            <h4>{name}</h4>
        </div>
    )
}

export default ModalContent