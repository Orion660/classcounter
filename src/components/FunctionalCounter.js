import React, {useState} from 'react';

const FunctionalCounter = () => {
    const [count, handleUpdate] = useState ({number: 0});
    return (
        <div>
        <h1>Counter: {count.number}</h1>
       <hr />
       <button onClick={()=> handleUpdate({number: count.number + 2})}>Increase Count</button>
       <button onClick = {()=> handleUpdate({number: count.number -2})}>Decrease Count</button>
     
     </div>
    )
}

export default FunctionalCounter
