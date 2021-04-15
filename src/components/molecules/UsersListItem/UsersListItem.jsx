import { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/IconButton/IconButton'
import Average from 'components/atoms/Average/Average'
import { Wrapper, StyledInfo } from './UsersListItem.style'
import { UsersContext } from 'providers/UsersProvider'

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext)

  return (
    <Wrapper>
      <Average value={average} />
      <StyledInfo>
        <p>{name}</p>
        <p>{attendance}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  )
}

UsersListItem.propTypes = {
  deleteUser: PropTypes.func,
}

export default UsersListItem
