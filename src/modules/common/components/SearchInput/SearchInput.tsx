import { useNavigate } from "react-router-dom"
import * as styles from "./SearchInput.module.scss"
import { useState } from "react"
import { useDebounce } from "../../hooks"

const SearchInput = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState<string>("")
    const debounce = useDebounce()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        const url = new URL(location.href)

        if (e.target.value) {
            url.searchParams.set("q", e.target.value)
        } else {
            url.searchParams.delete("q")
        }
                
        debounce(() => navigate(url.pathname + url.search))
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