import { useParams } from "react-router-dom"
import * as styles from "../../../common/styles/styles.scss"
import { useEffect, useState } from "react"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import { User } from "../../../common/types/users"
import { getData } from "../../../common/services"
import { USERS_ENDPOINT } from "../../../common/constants/api"
import RecomendedUsers from "../RecomendedUsers/RecomendedUsers"
import { Exception, Loading } from "../../../common/components"

export default function Profile() {
    const { login } = useParams()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    const loadUserProfile = () => {
        setLoading(true)
        getData({ url: `${USERS_ENDPOINT}/${login}` })
            .then(userProfile => {
                setUser(userProfile)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                if (err instanceof Error) {
                    setError(err.message)
                }
                setLoading(false)
            })
    }

    useEffect(() => {
        loadUserProfile()
    }, [login])

    
    return (
        <>
            {!error && user && <div className={styles.flexColumn}>
                <ProfileLayout {...user}/>
                <RecomendedUsers since={user.id}/>
            </div>}
            {error && <Exception message={error} onTryAgain={loadUserProfile}/>}
            <Loading isLoading={loading}/>
        </>  
    ) 
}