import { Component } from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList, StyledTitle, Wrapper } from './UsersList.style'
import { Button } from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'

function mockAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) resolve([...users])
      else reject({ message: 'err' })
    }, 500)
  })
}

class UsersList extends Component {
  state = {
    users: [],
    nameValue: '',
    attendanceValue: '',
    averageValue: '',
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    mockAPI()
      .then(data => {
        this.setState({ users: data })
        this.setState({ isLoading: false })
      })
      .catch(err => console.log(err))
  }

  deleteUser = name => {
    const filteredUsers = this.state.users.filter(user => user.name !== name)
    this.setState({ users: filteredUsers })
  }

  addUser = e => {
    e.preventDefault()

    const newUser = {
      name: this.state.nameValue,
      attendance: this.state.attendanceValue,
      average: this.state.averageValue,
    }

    this.setState({ users: [...this.state.users, newUser] })
  }

  render() {
    return (
      <>
        <Wrapper as="form" onSubmit={this.addUser}>
          <StyledTitle>Add new User</StyledTitle>
          <FormField
            label="Name"
            id="name"
            name="name"
            value={this.state.nameValue}
            onChange={e => this.setState({ nameValue: e.target.value })}
          />
          <FormField
            label="Attendance"
            id="attendance"
            name="attendance"
            value={this.state.attendanceValue}
            onChange={e => this.setState({ attendanceValue: e.target.value })}
          />
          <FormField
            label="Average"
            id="average"
            name="average"
            value={this.state.averageValue}
            onChange={e => this.setState({ averageValue: e.target.value })}
          />
          <Button type="submit">Add</Button>
        </Wrapper>
        <Wrapper>
          <StyledTitle>
            {this.state.isLoading ? 'Loading...' : 'Users List'}
          </StyledTitle>
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
      </>
    )
  }
}

export default UsersList
