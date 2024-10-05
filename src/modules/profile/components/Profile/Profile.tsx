import { useParams } from "react-router-dom"
import * as styles from "../../../common/styles/styles.module.scss"
import RecomendedUsers from "../RecommendedUsers/RecommendedUsers"
import { Exception, Loading } from "../../../common/components"
import { useProfile } from "../../hooks"
import ProfileLayoutWithModal from "../ProfileLayoutWithModal/ProfileLayoutWithModal"

export default function Profile() {
    const { login } = useParams()
    const { error, isLoading, data: user, refetch } = useProfile(login!)

    return (
        <>
            {!error && user && <div className={styles.flexColumn}>
                <ProfileLayoutWithModal {...user} />
                <RecomendedUsers since={user.id} />
            </div>}
            {error && <Exception message={error.message} onTryAgain={refetch} />}
            <Loading isLoading={isLoading} />
        </>
    )
}