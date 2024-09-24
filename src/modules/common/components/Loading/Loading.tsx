import { FaSpinner } from "react-icons/fa"
import * as styles from "./Loading.module.scss"
import { ILoadingProps } from "../../types"
import { useEffect, useState } from "react"

const Loading = ({ isLoading }: ILoadingProps) => {
    const [isReady, setIsReady] = useState(false)
    
    useEffect(() => {        
        if (isLoading) {
            setIsReady(false)
            setTimeout(() => {
                setIsReady(true)
            }, 300)
        }
    }, [isLoading])

    if (isReady && !isLoading) {
        return null
    }

    return (
        <div className={styles.container}>
            <FaSpinner className={styles.circle} />
        </div>
    )
}

export default Loading
