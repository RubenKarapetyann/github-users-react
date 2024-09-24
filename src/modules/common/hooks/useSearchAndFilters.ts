import { useSearchParams } from "react-router-dom"
import FILTERS from "../constants/filters"

const useSearchAndFilters = () => {
    const [ params ] = useSearchParams()

    const search = params.get("q")
    const currentFilters: Record<string, string> = {}
    FILTERS.map(filter => {
        currentFilters[filter.name] = params.get(filter.name) || filter.initialValue.toString()
    })

    return { search, filters: currentFilters }
}

export default useSearchAndFilters
