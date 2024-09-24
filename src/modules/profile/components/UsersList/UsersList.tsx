import { Card } from "../../../common/components"
import { IUsersListProps } from "../../../common/types"
import { removeUserFromFavourites } from "../../../favourites/services"
import * as styles from "./UsersList.module.scss"

const UsersList = ({ users }: IUsersListProps) => (
    <div className={styles.usersListContainer}>
        {users.map(user => (
            <Card
                login={user.login}
                id={user.id}
                avatar_url={user.avatar_url}
                key={user.id}
                onDeactiveStar={(id: number) => removeUserFromFavourites(id)}
            />
        ))}
    </div>
)

export default UsersList
