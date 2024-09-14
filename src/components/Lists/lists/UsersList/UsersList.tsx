import { UsersListProps } from "../../../../types/components/lists"
import Card from "../../components/Card/Card"
import * as styles from "./UsersList.module.scss"

const UsersList = ({ users }: UsersListProps) => (
    <div className={styles.usersListContainer}>
        {users.map(user => (
            <Card
                login={user.login}
                id={user.id}
                avatar_url={user.avatar_url}
                key={user.id}
            />
        ))}
    </div>
)

export default UsersList
