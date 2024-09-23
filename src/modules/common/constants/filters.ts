import { FilterObject } from "../types/header"

export const MIN_REP = "minRep"
const minRep: FilterObject = {
    displayName: "min repos",
    id: 1,
    name: MIN_REP,
    initialValue: 0
}

export const MAX_REP = "maxRep"
const maxRep: FilterObject = {
    displayName: "max repos",
    id: 2,
    name: MAX_REP,
    initialValue: 1000000
}

export const MIN_FOLLOWS = "minFollows"
const minFollows: FilterObject = {
    displayName: "min follows",
    id: 3,
    name: MIN_FOLLOWS,
    initialValue: 0
}

export const MAX_FOLLOWS = "maxFollows"
const maxFollows: FilterObject = {
    displayName: "max follows",
    id: 4,
    name: MAX_FOLLOWS,
    initialValue: 1000000
}


const FILTERS: FilterObject[] = [minRep, maxRep, minFollows, maxFollows]
export default FILTERS

export const FILTERS_MAP = {
    [MIN_REP]: minRep,
    [MAX_REP]: maxRep,
    [MIN_FOLLOWS]: minFollows,
    [MAX_FOLLOWS]: maxFollows
}
