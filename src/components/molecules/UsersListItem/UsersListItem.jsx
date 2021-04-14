import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/Button/Button'
import Average from 'components/atoms/Average/Average'
import { Wrapper, StyledInfo } from './UsersListItem.style'

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average value={average} />
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo>
    <Button />
  </Wrapper>
)

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
}

export default UsersListItem
