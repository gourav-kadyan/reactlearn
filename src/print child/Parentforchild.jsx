import React from 'react'

const Parentforchild = ({children}) => {
  return (
    <>
        <p>Parent component</p>
        {children}
    </>
  )
}

export default Parentforchild