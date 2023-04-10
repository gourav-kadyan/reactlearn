import React from 'react'

function Child({setValue}) {
  return (
    <div>
        <div>Child Component</div>
        <button onClick={() => setValue("Parent is Updated noice")} >update the parent</button>
    </div>
  )
}

export default Child