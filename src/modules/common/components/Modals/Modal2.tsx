import { Children, cloneElement, Fragment, isValidElement, MouseEventHandler, PropsWithChildren } from "react"
import { ICloseButtonProps, IModal2Props } from "../../types"
import * as styles from "./Modal.module.scss"
import { runThroughAllChildren } from "../../services"

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

    const newChildren = runThroughAllChildren({
        children, handle: child => {
            // ?????????????????????????????????
            const anyChild = child as any
            if (typeof anyChild.type === "string") {
                return anyChild
            }

            const type: string = anyChild.type.displayCode as string
            if (type === "closeButton") {
                return cloneElement(
                    anyChild,
                    { onClose }
                )
            }
            return anyChild
        }
    })
        
    return (
        <div className={styles.background} onClick={onCloseOutside}>
            {/* stops bubling */}
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                {newChildren}
            </div>
        </div>
    )
}

Modal2.Title = ({ children }: PropsWithChildren) => (
    <div className={styles.title}>{children}</div>
)

Modal2.Content = ({ children }: PropsWithChildren) => (
    <div className={styles.content}>{children}</div>
)

Modal2.Footer = ({ children }: PropsWithChildren) => (
    <div className={styles.footer}>{children}</div>
)

const CloseButton = ({ children, onClose }: ICloseButtonProps) => (
    <button
        className={styles.button}
        onClick={onClose}
    >{children || "x"}</button>
)
CloseButton.displayCode = "closeButton"
Modal2.CloseButton = CloseButton

export default Modal2