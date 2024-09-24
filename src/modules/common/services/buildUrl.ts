import { buildUrlProps } from "../types/services"

const buildUrl = ({
    url,
    search,
    filters,
    perPage,
    page,
    sort
}: buildUrlProps) => {
    let build = url

    build += search ? `?q=${search}` : "?q=a"

    build += filters ? 
        `+repos:${filters.minRep}..${filters.maxRep}`
        + 
        `+followers:${filters.minFollows}..${filters.maxFollows}` : ""


    build += perPage ? `&per_page=${perPage}` : ""
    build += page ? `&page=${page}` : ""
    build += sort ? "&sort=joined&order=asc" : ""
    
    return build
}

export default buildUrl
