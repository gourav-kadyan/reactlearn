import React from 'react'
import { useState } from 'react'
import Child from './Child';
import "./Parent.css"
const Parent = () => {
    const [value, setValue] = useState("UPDATE ME");
  return (
    <div>
        <div className='wrapper'>
            <div>PARENT</div>
            <div className='box-wrapper' >{value}</div>
        </div>
        <div className='wrapper'>
            <Child setValue={setValue} />
        </div>

    </div>
  )
}

export default Parent