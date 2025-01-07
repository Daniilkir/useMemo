
import { useState } from "react"
import { useCallback } from "react"

import Button from "./Button"


const Counter = () => {
    const [count, setCount] = useState(0)

    const adding = useCallback(() => {
        const constAdd = count + 1
        setCount(constAdd)
    }, [])

    const deference = useCallback(() => {
        const constDeference = count - 1
        setCount(constDeference)
    }, [])

    console.log("Render");
    

    return(
        <>
            <p>{count}</p>
            <Button onclickFunction={adding} name="Додавання"/>
            <Button onclickFunction={deference} name="Віднімання"/>
        </>
    )
}

export default Counter


