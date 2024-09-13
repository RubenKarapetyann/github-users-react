import { ReactNode } from "react";

export interface Route {
    id: number,
    path: string,
    element: ReactNode
}