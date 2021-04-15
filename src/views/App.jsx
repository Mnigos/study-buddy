import UsersProvider from 'providers/UsersProvider'
import { GlobalStyle } from 'assets/styles/globalStyle'
import AddUser from './AddUser'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './App.style'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from 'views/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
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
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default App
