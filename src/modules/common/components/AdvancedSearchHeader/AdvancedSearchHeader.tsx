import FILTERS, { FILTERS_MAP } from "../../../common/constants/filters"
import * as styles from "./AdvancedSearchHeader.module.scss"
import AdvancedSearchInput from "../AdvancedSearchInput/AdvancedSearchInput"

const AdvancedSearchHeader = () => {
    return (
        <div className={styles.advancedSearchWrapper}>
            <div className={styles.advancedSearchContainer}>
                {FILTERS.map(filter => (
                    <AdvancedSearchInput
                        filter={filter.name}
                        key={filter.id}
                        label={filter.displayName}
                        initialValue={FILTERS_MAP[filter.name].initialValue.toString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdvancedSearchHeader