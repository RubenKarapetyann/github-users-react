import { useCallback } from "react"
import FILTERS, { FILTERS_MAP } from "../../../../constants/filters"
import { useAdvancedSearch } from "../../../../contexts/AdvancedSearchContext/AdvancedSearchContext"
import { FilterTypes } from "../../../../types/components/header"
import * as styles from "./AdvancedSearchHeader.module.scss"
import AdvancedSearchInput from "./components/AdvancedSearchInput/AdvancedSearchInput"

const AdvancedSearchHeader = () => {
    const filter = useAdvancedSearch()

    if (!filter) return
    const { changeFilter } = filter

    const changeHandle = useCallback((filter: FilterTypes, value: string) => {
        changeFilter(filter, +value)
    }, [])

    return (
        <div className={styles.advancedSearchWrapper}>
            <div className={styles.advancedSearchContainer}>
                {FILTERS.map(filter => (
                    <AdvancedSearchInput
                        filter={filter.name}
                        key={filter.id}
                        label={filter.displayName}
                        changeHandle={changeHandle}
                        initialValue={FILTERS_MAP[filter.name].initialValue.toString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdvancedSearchHeader