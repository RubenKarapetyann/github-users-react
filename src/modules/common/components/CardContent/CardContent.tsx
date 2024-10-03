import { Link } from "react-router-dom"
import * as styles from "./CardContent.module.scss"
import { ICardContextProps } from "../../types"

const CardContent = ({ avatar_url, login, id }: ICardContextProps) => (
    <div className={styles.cardInfoContainer}>
        <Link to={`/users/${login}`}>
            <img src={avatar_url} alt="avatar image" className={styles.avatar}/>
            <p className={styles.login}>{login}</p>
            <span className={styles.id}>id: {id}</span>
        </Link>
    </div>
)

export default CardContent