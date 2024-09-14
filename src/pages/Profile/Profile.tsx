import { useParams } from "react-router-dom"
import * as styles from "../../styles/styles.scss"
import { ProfileLayout } from "../../components/Profile"
import { useEffect, useState } from "react"
import { User } from "../../types/api/users"
import getData from "../../utils/api/getData"
import { USERS_ENDPOINT } from "../../constants/api"

export default function Profile() {
    const { login } = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const getUser = async () => {
            const userProfile = await getData({ url: `${USERS_ENDPOINT}/${login}` })
            setUser(userProfile)
        }

        getUser()
    }, [login])

    if (!user) return

    return <div className={styles.flexColumn}><ProfileLayout user={user}/></div>
}