import { useEffect, useRef } from "react"
import { InfinityUsersListProps } from "../../../../types/components/lists"
import Card from "../../components/Card/Card"
import * as styles from "../UsersList/UsersList.module.scss"

const InfinityUsersList = ({ users, scrollCallback }: InfinityUsersListProps) => {
    const lastCardRef = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {  
            const entry = entries[0]

            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
                scrollCallback()
            }

        }, { threshold: [0.1, 1] })
    
    
        if (lastCardRef.current){
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
                    />
                </span>
            ))}
        </div>
    )
}

export default InfinityUsersList
