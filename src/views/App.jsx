import { GlobalStyle } from 'assets/styles/globalStyle'
import UsersList from 'components/organisms/UsersList/UsersList'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
`

const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </>
)

export default App
