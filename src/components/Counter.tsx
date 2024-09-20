import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(10);

    return (
        <>
            <h3> contador: <small>{count}</small> </h3>

            <button>+1</button>
            &nbsp;
            <button>-1</button>
        </>
    )
}
