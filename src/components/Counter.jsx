import {useState} from 'react'
function Counter () {
    const [counter, setCounter] =useState(0)
    /* let counter = 0 */
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleResta = () => {
        if(counter === 0) return
        setCounter(counter - 1)
    }
    const handleReset = ()=> {
        setCounter(0)
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleAdd}>sumar</button>
            <button onClick={handleResta}>restar</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Counter
