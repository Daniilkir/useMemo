import { memo } from "react"

const Button = memo(({onclickFunction, name}) => {

    return(
        <button onClick={onclickFunction}>{name}</button>
    )
})

export default Button