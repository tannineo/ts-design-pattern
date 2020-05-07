import Checkbox from './checkbox'
import Button from './button'

interface GUIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

export default GUIFactory
