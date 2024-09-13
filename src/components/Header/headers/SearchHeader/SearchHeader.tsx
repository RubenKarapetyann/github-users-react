import { ReactNode } from "react"
import SearchInput from "./components/SearchInput/SearchInput"
import * as styles from "./SearchHeader.module.scss"

const SearchHeader = ({ children }: { children?: ReactNode }) => (
    <div className={styles.searchHeaderContainer}>
        {children}
        <SearchInput/>
    </div>
)

export default SearchHeader