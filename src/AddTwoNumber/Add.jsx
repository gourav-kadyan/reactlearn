import React from 'react'
import { useState } from 'react'
const Add = () => {
    const [ num1, setNum1 ] = useState();
    const [ num2, setNum2 ] = useState();
    const [ total, setTotal ] = useState(0);

    function calculate(){
        setTotal(num1 + num2)
    }

  return (
    <div>
        <input type="number" value={num1} onChange={(e) => setNum1(+e.target.value)} />
        <input type="number" value={num2} onChange={(e) => setNum2(+e.target.value)} />
        <button onClick={calculate} >Add the numbers</button>
        <h4>total : {total || ""}</h4>
    </div>
  )
}

export default Add