import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(10);

    const increaseBy = (value: number) => {
        setCount(count + value);
    }


    return (
        <>
            <h3> contador: <small>{count}</small> </h3>

            <button onClick={() => increaseBy(+1)}>+1</button>
            &nbsp;
            <button onClick={() => increaseBy(-1)}>-1</button>
        </>
    )
}












