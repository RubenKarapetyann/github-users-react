import { useSearch } from "../../../../../../contexts/SearchContext/SearchContext"
import * as styles from "./SearchInput.module.scss"

const SearchInput = () => {
    const search = useSearch()
    if(!search) return

    const { value, changeValue } = search

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value)
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