import FormField from './FormField'
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider'

describe('Form Field', () => {
  it('Renders component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />)
  })
})
