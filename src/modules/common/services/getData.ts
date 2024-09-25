import { GetDataProps } from "../types/services"

const getData = async ({
    url,
    method = "GET",
    body
}: GetDataProps) => {
    const response = await fetch(url, {method, body: JSON.stringify(body)})
    if (response.ok) {
        return await response.json()
    }else {
        throw new Error("something went wrong")
    }
}

export default getData