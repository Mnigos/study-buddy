import React from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #181818;
  display: flex;
  align-items: center;
  width: 30%;
  padding: 30px;
  border-radius: 30px;
  color: #fff;
`

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((user, i) => (
        <UsersListItem userData={user} key={i} />
      ))}
    </StyledList>
  </Wrapper>
)

export default UsersList
