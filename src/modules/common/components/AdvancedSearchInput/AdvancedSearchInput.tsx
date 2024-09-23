import { useState } from "react"
import * as styles from "./AdvancedSearch.module.scss"
import { IAdvancedSearchInputProps } from "../../types/header"
import { useParamsProcess } from "../../hooks"


const AdvancedSearchInput = ({ filter, label, initialValue }: IAdvancedSearchInputProps) => {
    const [value, setValue] = useState(initialValue)
    const paramsProcess = useParamsProcess(filter)
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        
        setValue(newValue)
        if (e.target.checkValidity() && +newValue !== +value) {       
            paramsProcess(newValue)
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
