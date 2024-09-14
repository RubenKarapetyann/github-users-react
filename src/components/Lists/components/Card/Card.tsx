import { CardProps } from "../../../../types/components/lists"
import * as styles from "./Card.module.scss"
import Star from "./components/Star/Star"
import CardContent from "./components/CardContent/CardContent"

const Card = ({ login, avatar_url, id }: CardProps) => {
    return (
        <div className={`${styles.card} ${styles.cardInfo}`}>
            <Star user={{ login, avatar_url, id }}/>
            <CardContent login={login} avatar_url={avatar_url} id={id}/>
        </div>
    )
}

export default Card
