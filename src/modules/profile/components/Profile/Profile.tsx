import { useParams } from "react-router-dom"
import * as styles from "../../../../styles/styles.scss"
import { useEffect, useState } from "react"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import { User } from "../../../common/types/users"
import { getData } from "../../../common/services"
import { USERS_ENDPOINT } from "../../../common/constants/api"
import RecomendedUsers from "../RecomendedUsers/RecomendedUsers"

export default function Profile() {
    const { login } = useParams()
    const [user, setUser] = useState<User | null>(null)

    // Add loadingsss
    useEffect(() => {
        const getUser = async () => {
            const userProfile = await getData({ url: `${USERS_ENDPOINT}/${login}` })
            setUser(userProfile)
        }

        getUser()
    }, [login])

    if (!user) return

    return (
        <div className={styles.flexColumn}>
            <ProfileLayout {...user}/>
            <RecomendedUsers since={user.id}/>
        </div>  
    ) 
}