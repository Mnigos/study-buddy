import FormField from './FormField'
import { renderWithProvider } from 'helpers/renderWithProvider'

describe('Form Field', () => {
  it('Renders component', () => {
    renderWithProvider(<FormField label="name" name="name" id="name" />)
  })
})
