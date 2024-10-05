import { Children, cloneElement, isValidElement, ReactNode } from "react"
import { runThroughAllChildrenProps } from "./types"

const runThroughAllChildren = ({ children, handle }: runThroughAllChildrenProps): ReactNode => {  
    
    return Children.map(children, child => {
        if ( typeof child !== "object" || !isValidElement(child) ) {
            return child
        }
        return cloneElement(handle(child), undefined, runThroughAllChildren({children: child.props.children, handle}))
    })
}

export default runThroughAllChildren