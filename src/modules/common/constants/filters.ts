import { FilterObject } from "../types/header"

const minRep: FilterObject = {
    displayName: "min repos",
    id: 1,
    name: "minRep",
    initialValue: 0
}

const maxRep: FilterObject = {
    displayName: "max repos",
    id: 2,
    name: "maxRep",
    initialValue: 1000000
}

const minFollows: FilterObject = {
    displayName: "min follows",
    id: 3,
    name: "minFollows",
    initialValue: 0
}

const maxFollows: FilterObject = {
    displayName: "max follows",
    id: 4,
    name: "maxFollows",
    initialValue: 1000000
}


const FILTERS: FilterObject[] = [minRep, maxRep, minFollows, maxFollows]
export default FILTERS
