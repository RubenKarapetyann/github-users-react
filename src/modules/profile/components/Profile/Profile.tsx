import { useParams } from "react-router-dom"
import * as styles from "../../../../styles/styles.scss"
import { useEffect, useState } from "react"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import { User } from "../../../common/types/users"
import { getData } from "../../../common/services"
import { USERS_ENDPOINT } from "../../../common/constants/api"
import RecomendedUsers from "../RecomendedUsers/RecomendedUsers"
import { Loading } from "../../../common/components"

export default function Profile() {
    const { login } = useParams()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        setLoading(true)
        getData({ url: `${USERS_ENDPOINT}/${login}` })
            .then(userProfile => {
                setUser(userProfile)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [login])

    if (error) {
        return <span>{error}</span>
    }
    
    return (
        <div className={styles.flexColumn}>
            {user && <>
                <ProfileLayout {...user}/>
                <RecomendedUsers since={user.id}/>
            </>}
            <Loading isLoading={loading}/>
        </div>  
    ) 
}