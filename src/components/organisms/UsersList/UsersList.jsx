import React from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList, Wrapper } from './UsersList.style'

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
