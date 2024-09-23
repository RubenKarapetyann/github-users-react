import { ReactNode } from "react"
import * as styles from "./SearchHeader.module.scss"
import Title from "../Title/Title"
import SearchInput from "../SearchInput/SearchInput"

const SearchHeader = ({ children }: { children?: ReactNode }) => (
    <div className={styles.searchHeaderContainer}>
        <Title/>
        {children}
        <SearchInput/>
    </div>
)

export default SearchHeader