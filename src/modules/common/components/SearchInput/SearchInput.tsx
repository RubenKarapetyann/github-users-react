import * as styles from "./SearchInput.module.scss"
import { useState } from "react"
import { useParamsProcess, useSearchAndFilters } from "../../hooks"

const SearchInput = () => {
    const { search } = useSearchAndFilters()
    const [value, setValue] = useState<string>(search || "")
    const paramsProcess = useParamsProcess("q")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        
        setValue(newValue)
        paramsProcess(newValue)                
    }

    return (
        <input
            className={styles.searchInput}
            value={value}
            onChange={onChange}
            placeholder="search for users..."
        />
    )
}

export default SearchInput