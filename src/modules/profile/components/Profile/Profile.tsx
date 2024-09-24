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

    useEffect(() => {
        setLoading(true)
        const getUser = async () => {
            const userProfile = await getData({ url: `${USERS_ENDPOINT}/${login}` })
            setUser(userProfile)
            setLoading(false)
        }

        getUser()
    }, [login])

    if (!user) return

    return (
        <div className={styles.flexColumn}>
            <Loading isLoading={loading}/>
            <ProfileLayout {...user}/>
            <RecomendedUsers since={user.id}/>
        </div>  
    ) 
}