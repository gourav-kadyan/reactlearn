import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
        <Link to="/" >HOME</Link>
        <Link to="/about" >About</Link>
    </>
  )
}

export default Navigation