import React from 'react'
import { Logo, StyledLink, Wrapper } from './Navigation.styles'

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/" exact activeClassName="active-link">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user" activeClassName="active-link">
        Add user
      </StyledLink>
    </Wrapper>
  )
}

export default Navigation
