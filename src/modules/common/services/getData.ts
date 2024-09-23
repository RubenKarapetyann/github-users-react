import { GetDataProps } from "../types/services"

const getData = async ({
    url,
    method = "GET",
    body
}: GetDataProps) => {
    try {
        const response = await fetch(url, {method, body: JSON.stringify(body)})
        return await response.json()
    }catch (err) {
        console.log(err)
    }
}

export default getData