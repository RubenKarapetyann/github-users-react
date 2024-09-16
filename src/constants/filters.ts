import { FilterObject, FilterTypes } from "../types/components/header"

const minRep: FilterObject = {
    displayName: "min repos",
    id: 1,
    name: "minRep"
}

const maxRep: FilterObject = {
    displayName: "max repos",
    id: 2,
    name: "maxRep"
}

const minFollows: FilterObject = {
    displayName: "min follows",
    id: 3,
    name: "minFollows"
}

const maxFollows: FilterObject  = {
    displayName: "max follows",
    id: 4,
    name: "maxFollows"
}


const FILTERS: FilterObject[] = [minRep, maxRep, minFollows, maxFollows]
export default FILTERS