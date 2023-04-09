import React from 'react'
import { useState } from 'react'
const Show = () => {
    const [show, setShow ] = useState(true);

  return (
    <>
        <button onClick={() => setShow(!show)}  >{show ? "hide the element" : "show the element"}</button>
        {show && <div>je haha haha je hahahaha</div>}
    </>
  )
}

export default Show