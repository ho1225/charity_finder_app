import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";


const useFetch = (endpoint: string) =>{

    const [data, setData] = useState<AxiosResponse>()
    const [error, setError] = useState<string>("")
    const [loaded, setLoaded] = useState<boolean>(false)

    const options = {
        method: 'GET',
        url: `https://partners.every.org/v0.2/${endpoint}`,
        params: {
            apiKey: import.meta.env.VITE_API_KEY
        },

    }

    const fetchData = async () => {
        setLoaded(true)

        axios(options)
            .then((response) => {
                setData(response)
            })
            .catch((error) =>{
                setError(error)
            })
            .finally(() => setLoaded(true))


        
    }

    useEffect(() => {
      fetchData()
    }, [])
    
    
    return { data, loaded, error }
}

export default useFetch;