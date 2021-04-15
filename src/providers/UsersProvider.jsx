import { createContext, useState } from 'react'
import { users as usersData } from 'data/users'

export const UsersContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData)

  const deleteUser = name => {
    const filteredUsers = users.filter(user => user.name !== name)
    setUsers(filteredUsers)
  }

  const handleAddUser = formValues => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }

    setUsers([newUser, ...users])
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider
