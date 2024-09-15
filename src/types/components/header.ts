export interface NavLinkProps {
    displayName: string,
    path: string
}

export type FilterTypes = "minRep" | "maxRep" | "maxFollows" | "minFollows"

export interface AdvancedSearchInputProps {
    filter: FilterTypes,
}
