import { PALETTE } from "../../../../../../constants/palette"
import { StarProps } from "../../../../../../types/components/lists"
import { FaRegStar, FaStar } from "react-icons/fa"
import * as styles from "./Star.module.scss"
import { useEffect, useState } from "react"
import { useFavourite } from "../../../../../../contexts/FavouriteContext/FavouriteContext"

const Star = ({ user }: StarProps) => {
    const [active, setActive] = useState<boolean>(false)
    const favourites = useFavourite()

    useEffect(() => {
        if (!favourites) return
        const { users } = favourites

        const currentUser = users.find(favourite => favourite.id === user.id)
        if (!currentUser) return

        setActive(true)
    }, [])

    const onClick = () => {
        if (!favourites) return
        const { addUser, removeUser } = favourites

        if (active) {
            removeUser(user.id)
        } else {
            addUser(user)
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