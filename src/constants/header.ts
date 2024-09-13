import { HeaderItem } from "../types/constants/header"

export const HOME = "home"
const HOME_OBJECT: HeaderItem = {
    name: HOME,
    displayName: "HOME",
    id: 1
}

export const FAVOURITE = "favourite"
const FAVOURITE_OBJECT: HeaderItem = {
    name: FAVOURITE,
    displayName: "FAVOURITE",
    id: 2
}

const HEADER_ITEMS: HeaderItem[] = [HOME_OBJECT, FAVOURITE_OBJECT]
export default HEADER_ITEMS

export const HEADER_MAP = {
    [HOME] : HOME_OBJECT,
    [FAVOURITE] : FAVOURITE_OBJECT
}