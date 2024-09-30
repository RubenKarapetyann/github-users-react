import { useParams } from "react-router-dom"
import * as styles from "./../../../common/styles/styles.scss"
import { useEffect } from "react"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import RecomendedUsers from "../RecomendedUsers/RecomendedUsers"
import { Exception, Loading } from "../../../common/components"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { getProfile, selectProfileNecessaries } from "../../slice"

export default function Profile() {
    const { login } = useParams()
    const { user, loading, error } = useAppSelector(selectProfileNecessaries)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (login) {
            dispatch(getProfile(login))
        }
    }, [login])
    
    return (
        <>
            {user && <div className={styles.flexColumn}>
                <ProfileLayout {...user}/>
                <RecomendedUsers since={user.id}/>
            </div>}
            <Loading isLoading={loading}/>
            <Exception error={error} onTryAgain={() => dispatch(getProfile(login || ""))}/>
        </>  
    )
}