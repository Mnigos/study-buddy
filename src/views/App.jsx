import { useState } from 'react'
import { GlobalStyle } from 'assets/styles/globalStyle'
import { users as usersData } from 'data/users'
import AddUser from './AddUser'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './App.style'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from 'views/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}

const App = () => {
  const [users, setUsers] = useState(usersData)
  const [formValues, setFormValues] = useState(initialFormState)

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const deleteUser = name => {
    const filteredUsers = users.filter(user => user.name !== name)
    setUsers(filteredUsers)
  }

  const handleAddUser = e => {
    e.preventDefault()
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }

    setUsers([newUser, ...users])
    setFormValues(initialFormState)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              </Route>
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default App
