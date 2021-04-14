import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.black};
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
