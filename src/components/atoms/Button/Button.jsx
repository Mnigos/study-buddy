import styled from 'styled-components'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #0e0e0e;
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`

const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
)

export default Button
