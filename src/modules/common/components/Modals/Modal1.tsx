import { IModalProps } from "../../types"
import * as styles from "./Modal.module.scss"

const Modal1 = ({ 
    isOpen, 
    onClose,
    closeIfClickedOutside,
    title,
    footer,
    children
}: IModalProps) => {
    if (!isOpen) {
        return
    }

    const onCloseOutside = () => {
        if (onClose && closeIfClickedOutside) {
            onClose()
        }   
    }

    return (
        <>
            <div className={styles.container}>
                {onClose && (
                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.button}
                            onClick={onClose}
                        >x</button>
                    </div>
                )}
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.content}>{children}</div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
            <div className={styles.background} onClick={onCloseOutside}>
            </div>
        </>
    )
}

export default Modal1