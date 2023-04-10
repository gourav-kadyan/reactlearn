import React, { useState } from 'react'

const Disabled = () => {
    const [value, setValue] = useState("");
  return (
    <>
        <h3>Disabled</h3>
        <input type="text" placeholder='text here'  />
    </>
  )
}

export default Disabled;