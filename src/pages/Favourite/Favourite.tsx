import { UsersList } from "../../components/Lists";
import { useFavourite } from "../../contexts/FavouriteContext/FavouriteContext";
import * as styles from "../../styles/styles.scss"

export default function Favourite() {
    const favourite = useFavourite()

    if (!favourite) return
    const { users } = favourite

    return <div className={styles.container}><UsersList users={users}/></div>
}