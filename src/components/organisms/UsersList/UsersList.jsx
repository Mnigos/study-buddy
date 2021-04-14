import { Component } from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList, Wrapper } from './UsersList.style'

class UsersList extends Component {
  state = {
    users,
  }

  deleteUser = name => {
    const filteredUsers = this.state.users.filter(user => user.name !== name)
    this.setState({ users: filteredUsers })
  }

  render() {
    return (
      <Wrapper>
        <StyledList>
          {this.state.users.map((user, i) => (
            <UsersListItem
              deleteUser={this.deleteUser}
              userData={user}
              key={i}
            />
          ))}
        </StyledList>
      </Wrapper>
    )
  }
}

export default UsersList
