import { PropsWithChildren } from "react"
import { IModal2Props } from "../../types"
import * as styles from "./Modal.module.scss"

const Modal2 = ({ 
    isOpen, 
    onClose,
    closeIfClickedOutside,
    children
}: IModal2Props) => {
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
            <div className={styles.background} onClick={onCloseOutside}>
            </div>
            <div className={styles.container}>
                {onClose && (
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={onClose}
                        >x</button>
                    </div>
                )}
                {children}
            </div>
        </>
    )
}

// const Title = ({ children, onClose }: PropsWithChildren) => (
//     <div className={styles.title}>{children}</div>
// )
// Title.displayName = 'akjsfajsfh'

// Modal2.Title = Title

Modal2.Title = ({ children }: PropsWithChildren) => (
    <div className={styles.title}>{children}</div>
)

Modal2.Content = ({ children }: PropsWithChildren) => (
    <div className={styles.content}>{children}</div>
)

Modal2.Footer = ({ children }: PropsWithChildren) => (
    <div className={styles.footer}>{children}</div>
)

export default Modal2