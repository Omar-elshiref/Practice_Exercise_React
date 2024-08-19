import React, { useState, useEffect } from "react";

function CountEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} Times`
    })

    return (
        <div>
            <p>you clicked {count} Times</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Click me

            </button>
        </div>
    )
}

export default CountEffect