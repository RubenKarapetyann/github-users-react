export interface NavLinkProps {
    displayName: string,
    path: string
}

export type FilterTypes = "minRep" | "maxRep" | "maxFollows" | "minFollows"

export interface FilterObject {
    name: FilterTypes,
    displayName: string,
    id: number,
    initialValue: number
}

export interface AdvancedSearchInputProps {
    filter: FilterTypes,
    label: string,
    initialValue: string,
    changeHandle: (filter: FilterTypes, value: string) => void 
}
