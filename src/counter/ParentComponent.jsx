import React from 'react'
import ChildComponent from './ChildComponent'
import { useState } from 'react'

function ParentComponent(){
    const [total, setTotal] = useState(0);

    function handleChildCountChange(newCount) {
    setTotal(total + newCount);
    }
    
    return (
    <div>
    <h1>Parent Component</h1>
    <ChildComponent onCountChange={handleChildCountChange} />
    <p>Total count: {total}</p>
    </div>
    );
}

export default ParentComponent