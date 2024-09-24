import { useEffect, useRef } from "react"
import Card from "../../components/Card/Card"
import * as styles from "../../../profile/components/UsersList/UsersList.module.scss"
import { IInfinityUsersListProps } from "../../types"

const InfinityUsersList = ({ users, scrollCallback, next, onDeactiveStar }: IInfinityUsersListProps) => {
    const lastCardRef = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {  
            const entry = entries[0]

            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
                scrollCallback()
            }

        }, { threshold: [0.1, 1] })
    
    
        if (lastCardRef.current && next){
            observer.observe(lastCardRef.current)
        }
        
        return () => observer.disconnect()
    }, [users])


    return (
        <div className={styles.usersListContainer}>
            {users.map((user, i) => (
                <span
                    key={user.id}
                    ref={i === users.length - 1 ? lastCardRef : null}
                >
                    <Card
                        login={user.login}
                        id={user.id}
                        avatar_url={user.avatar_url}
                        onDeactiveStar={onDeactiveStar}
                    />
                </span>
            ))}
        </div>
    )
}

export default InfinityUsersList
