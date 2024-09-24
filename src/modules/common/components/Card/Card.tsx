import * as styles from "./Card.module.scss"
import Star from "../Star/Star"
import CardContent from "../CardContent/CardContent"
import { memo } from "react"
import { ICardProps } from "../../types"

const Card = ({ login, avatar_url, id, onDeactiveStar }: ICardProps) => {
    return (
        <div className={`${styles.card} ${styles.cardInfo}`}>
            <Star login={login} avatar_url={avatar_url} id={id} onDeactiveStar={onDeactiveStar}/>
            <CardContent login={login} avatar_url={avatar_url} id={id}/>
        </div>
    )
}

export default memo(Card)
