import { Star } from "../../../common/components"
import { IProfileLayoutProps } from "../../types"
import * as styles from "./ProfileLayout.module.scss"

const ProfileLayout = ({
    avatar_url,
    id,
    login,
    name,
    followers,
    following,
    bio
}: IProfileLayoutProps) => (
    <div className={styles.userProfileContainer}>
        <div>
            <img src={avatar_url} alt="avatar image" className={styles.avatar}/>
            <Star login={login} avatar_url={avatar_url} id={id}/>
        </div>
        <div className={styles.userInfoConatiner}>
            <div className={styles.userProfileNameContainer}>
                <h3>{login}</h3>
                <p>{name}</p>
            </div>
            <div className={styles.breaker}></div>
            <div className={styles.userFollowInfoContainer}>
                <div className={styles.userFollowInfoContainer}>
                    <p>followers: </p><span>{followers.toString()}</span>
                </div>
                <div className={styles.userFollowInfoContainer}>
                    <p>following: </p><span>{following.toString()}</span>
                </div>
            </div>
            <p className={styles.bio}>{bio ? bio : "no bio yet"}</p>
        </div>
    </div>
)

export default ProfileLayout