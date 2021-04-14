import React from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/UsersListItem/UsersListItem'

const UsersList = () => (
  <div>
    <ul>
      {users.map((user, i) => (
        <UsersListItem userData={user} key={i} />
      ))}
    </ul>
  </div>
)

export default UsersList
