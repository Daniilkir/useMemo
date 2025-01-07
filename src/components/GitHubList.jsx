
import { useState, useEffect, useMemo, useCallback } from "react"
import { getUsersApi } from "../services/getUsersApi"
import useFetchUsers from "../hooks/useFetchUsers.js"

const GitHubList = () => {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")

    
    const {data} = useFetchUsers(getUsersApi)
    console.log(data);
    useEffect(() => {

        setCountries(data)
    }, [])
    console.log(countries);
    
    // const getUsers = useCallback( async() => {

    //     const data = await getUsersApi()
    //     setUsers(data)
        
    // }, [search, countries])
    
        const filterCountries = useMemo(() => {
        
            let filteredCountries = [...countries];
            filteredCountries = filteredCountries.filter(
              (countrie) => countrie.name.common.includes(search)
            );
        
            console.log("Викликалася функція фільтрації");
        
            return filteredCountries;
          }, [search, countries])

          const handleChangeInput = (event) => {
            const valueInput = event.target.value
            setSearch(valueInput)
            
        }      
    
    return(
        <>
            <input
            onChange={handleChangeInput}
            type="text"
            placeholder="Find you things"
            />
           <ul>
            {filterCountries.map((countrie) => <li>
                <p>Name:{countrie.name.common}</p>
                
            </li>)}
           </ul>
        </>
    )
}

export default GitHubList












