import { Link } from "react-router-dom"
import { CardProps } from "../../../../types/components/lists"
import * as styles from "./Card.module.scss"
import Star from "./components/Star/Star"

const Card = ({ login, avatar_url, id }: CardProps) => (
    <div className={`${styles.card} ${styles.cardInfo}`}>
        <Star active/>
        <div className={styles.cardInfoContainer}>
            <Link to={`/users/${login}`}>
                <img src={avatar_url} alt="avatar image" className={styles.avatar}/>
                <p className={styles.login}>{login}</p>
                <span className={styles.id}>id: {id}</span>
            </Link>
        </div>
    </div>
)

export default Card
