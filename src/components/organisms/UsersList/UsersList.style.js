import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  padding: 30px;
  border-radius: 15px;
  color: #fff;
`

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
