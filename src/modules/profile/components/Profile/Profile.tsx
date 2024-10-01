import { useParams } from "react-router-dom"
import * as styles from "../../../common/styles/styles.scss"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import RecomendedUsers from "../RecomendedUsers/RecomendedUsers"
import { Exception, Loading } from "../../../common/components"
import { useProfile } from "../../hooks"

export default function Profile() {
    const { login } = useParams()
    const { error, isLoading, user, refetchUserProfile } = useProfile(login!)
    
    return (
        <>
            {!error && user && <div className={styles.flexColumn}>
                <ProfileLayout {...user}/>
                <RecomendedUsers since={user.id}/>
            </div>}
            {error && <Exception message={error.message} onTryAgain={refetchUserProfile}/>}
            <Loading isLoading={isLoading}/>
        </>  
    ) 
}