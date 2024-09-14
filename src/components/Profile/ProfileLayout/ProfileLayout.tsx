import { ProfileProps } from "../../../types/components/profile"
import { Star } from "../../Lists"
import * as styles from "./ProfileLayout.module.scss"

const ProfileLayout = ({
    user
}: ProfileProps) => (
    <div className={styles.userProfileContainer}>
        <div>
            <img src={user.avatar_url} alt="avatar image" className={styles.avatar}/>
            <Star user={user}/>
        </div>
        <div className={styles.userInfoConatiner}>
            <div className={styles.userProfileNameContainer}>
                <h3>{user.login}</h3>
                <p>{user.name}</p>
            </div>
            <div className={styles.breaker}></div>
            <div className={styles.userFollowInfoContainer}>
                <div className={styles.userFollowInfoContainer}>
                    <p>followers: </p><span>{user.followers.toString()}</span>
                </div>
                <div className={styles.userFollowInfoContainer}>
                    <p>following: </p><span>{user.following.toString()}</span>
                </div>
            </div>
            <p className={styles.bio}>{user.bio ? user.bio : "no bio yet"}</p>
        </div>
    </div>
)

export default ProfileLayout