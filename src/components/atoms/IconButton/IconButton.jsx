import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { StyledButton } from './IconButton.style'

const IconButton = props => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
)

export default IconButton
