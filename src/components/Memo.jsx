import { useState } from "react";
function Memo() {
    const [result, setResult] = useState(0)
    const cache = {

    }
    const sum = (a, b) => {
        const keys = JSON.stringify({
            a,
            b
        })
        // const keys = "{
        // a: 1,
        // b: 2,
        // }"
        if (cache[keys]) {
            return cache[keys]
        }
        const result = a + b
        cache[keys] = result
        setResult(result)
        return result
    }
    return (
        <>
            <button onClick={() => sum(1, 2)}>1+2</button>
            <button onClick={() => sum(2, 2)}>2+2</button>
            <button onClick={() => sum(3, 2)}>3+2</button>
            <p>{result}</p>
        </>
    )
}
export default Memo;