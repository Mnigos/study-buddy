import AddUser from './AddUser'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProvider } from 'helpers/renderWithProvider'
import Dashboard from './Dashboard'

describe('Form Field', () => {
  it('Renders component', () => {
    renderWithProvider(
      <>
        <AddUser />
        <Dashboard />
      </>
    )
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'e' } })
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '87%' },
    })
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '5.0' },
    })
    fireEvent.click(screen.getByText('Add'))
    screen.getByText('e')
  })
})
