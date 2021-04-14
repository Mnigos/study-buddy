import { useState } from 'react'
import { GlobalStyle } from 'assets/styles/globalStyle'
import { users as usersData } from 'data/users'
import UsersList from 'components/organisms/UsersList/UsersList'
import AddUser from 'components/organisms/AddUser/AddUser'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './App.style'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList />
            </Route>
            <Route path="/add-user">
              <AddUser
                formValues={formValues}
                handleAddUser={handleAddUser}
                handleInputChange={handleInputChange}
              />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  )
}

export default App
