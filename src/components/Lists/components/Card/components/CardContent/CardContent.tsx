import { Link } from "react-router-dom"
import { CardProps } from "../../../../../../types/components/lists"
import * as styles from "./CardContent.scss"

const CardContent = ({ avatar_url, login, id }: CardProps) => (
    <div className={styles.cardInfoContainer}>
        <Link to={`/users/${login}`}>
            <img src={avatar_url} alt="avatar image" className={styles.avatar}/>
            <p className={styles.login}>{login}</p>
            <span className={styles.id}>id: {id}</span>
        </Link>
    </div>
)

export default CardContent