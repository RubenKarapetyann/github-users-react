import { useRef } from "react";

//deounce
const useSearchDelay = () => {
    const timeoutId = useRef<number | null>(null)
    
    return (callback: () => void) => {   
        if (timeoutId.current){
            clearTimeout(timeoutId.current)
        }   
        timeoutId.current = setTimeout(callback, 300)
    }
}

export default useSearchDelay