import { FaSpinner } from "react-icons/fa"
import * as styles from "./Loading.module.scss"
import { ILoadingProps } from "../../types"
import { useEffect, useRef, useState } from "react"

const Loading = ({ isLoading }: ILoadingProps) => {
    const [isReady, setIsReady] = useState(false)
    const calledTimes = useRef(0)

    useEffect(() => {
        if (isLoading && calledTimes.current > 0) {
            setIsReady(false)
            setTimeout(() => {
                setIsReady(true)
                calledTimes.current++
            }, 300)
        }
    }, [isLoading])

    useEffect(() => {
        setIsReady(false)
        setTimeout(() => {
            setIsReady(true)
            calledTimes.current++
        }, 300)
    }, [])

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
