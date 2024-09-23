import { useNavigate } from "react-router-dom"
import useDebounce from "./useDebounce"
import { processParams } from "../services"

const useParamsProcess = (key: string) => {
    const navigate = useNavigate()
    const debounce = useDebounce()

    return (value: string) => {
        const navigateTo = processParams(key, value)

        debounce(() => navigate(navigateTo))
    }
}

export default useParamsProcess
