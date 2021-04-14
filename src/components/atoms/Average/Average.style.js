import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  margin: 10px;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success
    if (value > 3) return theme.colors.warning
    if (value > 2) return theme.colors.error
    return theme.colors.darkGrey
  }};
`
