import { useParams } from "react-router-dom"

export default function Profile() {
    const { login } = useParams()
    
    return <div>profile {login}</div>
}