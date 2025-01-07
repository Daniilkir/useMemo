
export const getUsersApi = async () => {
    return await fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(countries =>  
        
      {  return countries}
    
    )
    .catch(error => console.log(error)
    )
}



