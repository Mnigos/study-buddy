import { useReducer, useContext } from 'react'
import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button'
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper'
import { Title } from 'components/atoms/Title/Title'
import { UsersContext } from 'providers/UsersProvider'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      }
    case 'CLEAR VALUES':
      return initialFormState
    case 'CONSENT TOGGLE':
      return {
        ...state,
        consent: !state.consent,
      }
    case 'THROW ERROR':
      return {
        ...state,
        error: action.errorValue,
      }
    default:
      return state
  }
}

function AddUser() {
  const [formValues, dispatch] = useReducer(reducer, initialFormState)
  const { handleAddUser } = useContext(UsersContext)

  const handleInputChange = e => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    })
  }

  const handleSubmitUser = e => {
    e.preventDefault()

    if (!formValues.consent)
      return dispatch({
        type: 'THROW ERROR',
        errorValue: 'You need to give consent',
      })

    handleAddUser(formValues)
    dispatch({ type: 'CLEAR VALUES' })
  }

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}
      />
      <Button type="submit">Add</Button>
      <p>{formValues.error}</p>
    </ViewWrapper>
  )
}

export default AddUser
