import { HeaderItem } from "../types/header"

const HOME_OBJECT: HeaderItem = {
    name: "home",
    displayName: "HOME",
    id: 1,
    path: "/"
}

const FAVOURITE_OBJECT: HeaderItem = {
    name: "favourite",
    displayName: "FAVOURITE",
    id: 2,
    path: "/favourite"
}

const HEADER_ITEMS: HeaderItem[] = [HOME_OBJECT, FAVOURITE_OBJECT]
export default HEADER_ITEMS
