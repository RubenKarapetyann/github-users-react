import { useAdvancedSearch } from "../../../../../../contexts/AdvancedSearchContext/AdvancedSearchContext"
import { AdvancedSearchInputProps } from "../../../../../../types/components/header"
import * as styles from "./AdvancedSearch.module.scss"

const AdvancedSearchInput = ({ filter, label }: AdvancedSearchInputProps) => {
    const filters = useAdvancedSearch()

    if (!filters) return

    const currentFilter = filters.filters[filter]
    const changeFilter = filters.changeFilter


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checkValidity()) {
            changeFilter(filter, +e.target.value)
        }
    }

    return (
        <div className={styles.advancedSearchInputContainer}>
            <label htmlFor={filter}>{label}</label>
            <input
                type="number"
                id={filter}
                pattern="[0-9]*"
                min={0}
                max={999999}
                className={styles.advancedSearchInput}
                onChange={onChange}
                value={currentFilter}
            />
        </div>
    )
}

export default AdvancedSearchInput
