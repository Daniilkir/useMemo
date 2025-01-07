
import { useState, useEffect } from "react"

const useFetchUsers = (getUsersApi) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = ( async() => {
        
                const data = await getUsersApi()
            
                setData(data)
                
            })
        getData()
        

    }, [])


    return {data}

}

// console.log(useFetch(getUsersApi))

export default useFetchUsers


