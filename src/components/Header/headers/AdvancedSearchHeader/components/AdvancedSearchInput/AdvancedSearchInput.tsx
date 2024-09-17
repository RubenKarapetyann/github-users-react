import { memo, useState } from "react"
import { AdvancedSearchInputProps } from "../../../../../../types/components/header"
import * as styles from "./AdvancedSearch.module.scss"

const AdvancedSearchInput = ({ filter, label, initialValue, changeHandle }: AdvancedSearchInputProps) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if (e.target.checkValidity() && +e.target.value !== +value) {            
            changeHandle(filter, e.target.value)
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

export default memo(AdvancedSearchInput)
