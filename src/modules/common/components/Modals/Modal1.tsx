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
        <div className={styles.background} onClick={onCloseOutside}>
            <div>
                <div className={styles.header}>
                    {title && <div className={styles.title}>{title}</div>}
                    {onClose && (
                        <div className={styles.buttonContainer}>
                            <button
                                onClick={onClose}
                            >x</button>
                        </div>
                    )}
                </div>
                <div className={styles.content}>{children}</div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    )
}

export default Modal1