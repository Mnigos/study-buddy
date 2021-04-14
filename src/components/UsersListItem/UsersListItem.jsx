import React from 'react'

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
)

UsersListItem.propTypes = {}

export default UsersListItem
