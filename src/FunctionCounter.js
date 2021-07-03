import React, { useState } from 'react';


const FunctionCounter = () => {
const [count, UpdateCount] = useState({number:10});

    return (
        <div >
            <h1> Function counter : {count.number} </h1>
            <hr />
            <button onClick = {() => UpdateCount({number: count.number + 1})}> 
            Increase Count</button>
            <button onClick = {() =>UpdateCount({number: count.number -1 })}> 
            Decrease Count</button>
        </div>
    )
}

export default FunctionCounter;