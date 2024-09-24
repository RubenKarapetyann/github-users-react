export interface GetDataProps {
    url: string,
    method?: "GET" | "POST",
    body?: Object
}

export interface buildUrlProps {
    url: string,
    search?: string | null,
    filters?: Record<string, string>,
    perPage?: number,
    page?: number,
    sort?: boolean
}