import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/IconButton/IconButton'
import Average from 'components/atoms/Average/Average'
import { Wrapper, StyledInfo } from './UsersListItem.style'
import { UserShape } from 'types'

const UsersListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => (
  <Wrapper>
    <Average value={average} />
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo>
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
)

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
  deleteUser: PropTypes.func,
}

export default UsersListItem
