export interface INavLinkProps {
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

export interface IAdvancedSearchInputProps {
    filter: FilterTypes,
    label: string,
    initialValue: string,
    changeHandle: (filter: FilterTypes, value: string) => void 
}

export interface HeaderItem {
    displayName: string,
    id: number,
    name: string,
    path: string
}