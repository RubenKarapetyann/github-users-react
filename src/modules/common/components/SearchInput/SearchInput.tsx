import { useNavigate } from "react-router-dom"
import * as styles from "./SearchInput.module.scss"
import { useState } from "react"
import { useSearchDelay } from "../../hooks"

const SearchInput = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState<string>("")
    const delayer = useSearchDelay()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        delayer(() => navigate(`${location.pathname}?q=${e.target.value}`))
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