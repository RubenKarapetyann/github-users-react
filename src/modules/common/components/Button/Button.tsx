import { PALETTE } from "../../constants/palette"
import { IButtonProps } from "../../types"
import * as styles from "./Button.module.scss"

const Button = ({ onClick, color=PALETTE.orange, children }: IButtonProps) => (
    <button 
        onClick={onClick}
        style={{backgroundColor : color}}
        className={styles.button}
    >{children}</button>
)

export default Button