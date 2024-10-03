import { forwardRef } from "react"
import { PALETTE } from "../../constants/palette"
import { IButtonProps } from "../../types"
import * as styles from "./Button.module.scss"

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ color=PALETTE.orange, children, ...rest }: IButtonProps, ref) => (
    <button 
        style={{backgroundColor : color}}
        className={styles.button}
        ref={ref}
        {...rest}
    >{children}</button>
))

export default Button