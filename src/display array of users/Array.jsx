import React from 'react'

const Array = () => {
    const users = [
        {name : 'Gourav', id : 1},
        {name : 'tony' , id : 2},
        {name : 'gigachad' , id : 3}
    ]
    const userItems = users.map( (user) => <li key={user.id}>{user.name}</li>)
  return (
    <h1><ol>{userItems}</ol></h1>
  )
}

export default Array