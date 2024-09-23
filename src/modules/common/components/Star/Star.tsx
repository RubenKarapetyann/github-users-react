import { FaRegStar, FaStar } from "react-icons/fa"
import * as styles from "./Star.module.scss"
import { useEffect, useState } from "react"
import { useFavourite } from "../../../../contexts/FavouriteContext/FavouriteContext"
import { IStarProps } from "../../types"
import { PALETTE } from "../../constants/palette"


const Star = ({ avatar_url, id, login }: IStarProps) => {
    const [active, setActive] = useState<boolean>(false)
    const favourites = useFavourite()

    useEffect(() => {
        if (!favourites) return
        const { users } = favourites

        const currentUser = users.find(favourite => favourite.id === id)
        if (!currentUser) return

        setActive(true)
    }, [])

    const onClick = () => {
        if (!favourites) return
        const { addUser, removeUser } = favourites

        if (active) {
            removeUser(id)
        } else {
            addUser({id, login, avatar_url})
        }
        setActive(status => !status)
    }

    return (
        <div className={styles.star} onClick={onClick}>
            {active ? <FaStar color={PALETTE.orange} /> : <FaRegStar />}
        </div>
    )
}

export default Star