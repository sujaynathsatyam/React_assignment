import react, { useState } from 'react';

import '../index.css'

const Hookbasic = () =>
{
    
    const [count,setCount]=useState(0);
    const InNum =() =>
    {
        setCount(count+1)
    }
    
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={InNum}>Click</button>
    </div>
    
    );
        

    
}

export default Hookbasic;