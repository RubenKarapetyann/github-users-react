import { PALETTE } from "../../../../../../constants/palette"
import { StarProps } from "../../../../../../types/components/lists"
import { FaRegStar, FaStar } from "react-icons/fa"
import * as styles from "./Star.module.scss"

const Star = ({ active }: StarProps) => {
    
    return (
        <div className={styles.star}>
            {active ? <FaStar color={PALETTE.orange}/> : <FaRegStar/>}
        </div>
    )
}

export default Star