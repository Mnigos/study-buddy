import { GlobalStyle } from 'assets/styles/globalStyle'
import UsersList from 'components/organisms/UsersList/UsersList'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
)

export default App
