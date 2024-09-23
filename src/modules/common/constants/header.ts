import { HeaderItem } from "../types/header"

export const HOME = "home"
const HOME_OBJECT: HeaderItem = {
    name: HOME,
    displayName: "HOME",
    id: 1,
    path: "/"
}

export const FAVOURITE = "favourite"
const FAVOURITE_OBJECT: HeaderItem = {
    name: FAVOURITE,
    displayName: "FAVOURITE",
    id: 2,
    path: "/favourite"
}

const HEADER_ITEMS: HeaderItem[] = [HOME_OBJECT, FAVOURITE_OBJECT]
export default HEADER_ITEMS

export const HEADER_MAP = {
    [HOME] : HOME_OBJECT,
    [FAVOURITE] : FAVOURITE_OBJECT
}