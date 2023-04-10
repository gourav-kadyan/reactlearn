import React, { useState } from 'react'

const Binding = () => {
    const [ value, setValue ] = useState("");
  return (
    <>
        <div>data Binding</div>
        <input type="text" placeholder='Enter text here' value={value} onChange={(event) => setValue(event.target.value)}></input>
        <h4>{value}</h4>
    </>
  )
}

export default Binding