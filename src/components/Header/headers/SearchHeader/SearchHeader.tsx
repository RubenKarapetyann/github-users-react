import { ReactNode } from "react"
import SearchInput from "./components/SearchInput/SearchInput"
import * as styles from "./SearchHeader.module.scss"
import Title from "./components/Title/Title"

const SearchHeader = ({ children }: { children?: ReactNode }) => (
    <div className={styles.searchHeaderContainer}>
        <Title/>
        {children}
        <SearchInput/>
    </div>
)

export default SearchHeader