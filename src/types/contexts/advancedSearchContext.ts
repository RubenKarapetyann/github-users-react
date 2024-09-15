export interface Filters {
    maxRep: number,
    minRep: number,
    maxFollows: number,
    minFollows: number
}

export interface AdvancedSearchContextType {
    filters: Filters,
    changeFilter: (filter: string, value: number) => void
}