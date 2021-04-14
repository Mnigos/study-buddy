import { GlobalStyle } from 'assets/styles/globalStyle'
import UsersList from 'components/organisms/UsersList/UsersList'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './App.style'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
)

export default App
