import { useParams } from "react-router-dom"
import * as styles from "../../../../styles/styles.scss"
import { useEffect } from "react"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import RecomendedUsers from "../RecomendedUsers/RecomendedUsers"
import { Loading } from "../../../common/components"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { getUser, selectProfileNecessaries } from "../../slice"

export default function Profile() {
    const { login } = useParams()
    const { user, loading, error } = useAppSelector(selectProfileNecessaries)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (login) {
            dispatch(getUser(login))
        }
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