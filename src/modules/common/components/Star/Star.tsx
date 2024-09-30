import { FaRegStar, FaStar } from "react-icons/fa"
import * as styles from "./Star.module.scss"
import { useEffect, useState } from "react"
import { IStarProps } from "../../types"
import { PALETTE } from "../../constants/palette"
import { addUserToFavourites, getFavouriteUsers } from "../../../favourites/services"


const Star = ({ avatar_url, id, login, onDeactiveStar }: IStarProps) => {
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        const { users } = getFavouriteUsers({})
        const currentUser = users.find(favourite => favourite.id === id)
        
        if (!currentUser) {
            setActive(false)
        } else {
            setActive(true)
        }
    }, [login])

    const onClick = () => {
        if (active) {
            onDeactiveStar(id)
        } else {
            addUserToFavourites({id, login, avatar_url})
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