import FILTERS from "../../../../constants/filters"
import * as styles from "./AdvancedSearchHeader.module.scss"
import AdvancedSearchInput from "./components/AdvancedSearchInput/AdvancedSearchInput"

const AdvancedSearchHeader = () => (
    <div className={styles.advancedSearchWrapper}>
        <div className={styles.advancedSearchContainer}>
            {FILTERS.map(filter => (
                <AdvancedSearchInput
                    filter={filter.name}
                    key={filter.id}
                    label={filter.displayName}
                />
            ))}
        </div>
    </div>
)

export default AdvancedSearchHeader