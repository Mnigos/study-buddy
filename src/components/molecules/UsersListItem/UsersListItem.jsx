import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/IconButton/IconButton'
import Average from 'components/atoms/Average/Average'
import { Wrapper, StyledInfo } from './UsersListItem.style'

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
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
  deleteUser: PropTypes.func,
}

export default UsersListItem
