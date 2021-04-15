import { useState, createContext } from 'react'
import { GlobalStyle } from 'assets/styles/globalStyle'
import { users as usersData } from 'data/users'
import AddUser from './AddUser'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './App.style'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from 'views/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const UsersContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
})

const App = () => {
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          >
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default App
