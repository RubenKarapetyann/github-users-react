import { useState } from "react"
import * as styles from "./AdvancedSearch.module.scss"
import { IAdvancedSearchInputProps } from "../../types/header"
import { useNavigate } from "react-router-dom"
import { useSearchDelay } from "../../hooks"


const AdvancedSearchInput = ({ filter, label, initialValue }: IAdvancedSearchInputProps) => {
    const [value, setValue] = useState(initialValue)
    const navigate = useNavigate()
    const delayer = useSearchDelay()
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if (e.target.checkValidity() && +e.target.value !== +value) {       
            const url = new URL(location.href)
            url.searchParams.set(filter, e.target.value)

            if (e.target.value) {
                url.searchParams.set(filter, e.target.value)
            } else {
                url.searchParams.delete(filter)
            }

            delayer(() => navigate(url.pathname + url.search))      
        }
    }

    return (
        <div className={styles.advancedSearchInputContainer}>
            <label htmlFor={filter}>{label}</label>
            <input
                type="number"
                id={filter}
                pattern="[0-9]*"
                min={0}
                max={999999}
                className={styles.advancedSearchInput}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default AdvancedSearchInput
