import React, { useState } from 'react'

const Disabled = () => {
    const [value, setValue] = useState("");
  return (
    <>
        <h3>Disabled</h3>
        <input type="text" placeholder='text here' onChange={(event) => setValue(event.target.value)} />
        <button disabled={value.length < 1}  type="submit" >SUBMIT</button>
    </>
  )
}

export default Disabled;