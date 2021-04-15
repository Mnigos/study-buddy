import { useContext } from 'react'
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper'
import UsersList from 'components/organisms/UsersList/UsersList'
import { UsersContext } from './App'

const Dashboard = () => {
  const { users, deleteUser } = useContext(UsersContext)

  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  )
}

export default Dashboard
