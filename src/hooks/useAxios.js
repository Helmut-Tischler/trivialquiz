import axios from "axios"
import { useEffect, useState } from "react"

axios.defaults.baseURL = "https://opentdb.com/"

const useAxios = ({ url }) => {
    const [response, setResponse] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get(url)
                setResponse(response.data)
                console.log(response.data)
            }
            fetchData()
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }

    }, [url])

    console.log("Ich bin nach dem UseEffekt: ", response)
    return { response, error, loading }

}

export default useAxios