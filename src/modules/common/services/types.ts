import { PropsWithChildren, ReactNode } from "react"

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

export interface runThroughAllChildrenProps extends PropsWithChildren {
    handle: (child: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>) => React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
}