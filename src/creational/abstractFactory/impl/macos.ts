import GUIFactory from '../interfaces/guiFactory'
import Button from '../interfaces/button'
import Checkbox from '../interfaces/checkbox'

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton()
  }

  createCheckbox(): Button {
    return new MacCheckbox()
  }
}

class MacButton implements Button {
  name = 'MacButton'

  paint(): void {
    console.log('MacButton')
  }
}

class MacCheckbox implements Checkbox {
  name = 'MacCheckbox'

  paint(): void {
    console.log('MacCheckbox')
  }
}

export { MacFactory, MacButton, MacCheckbox }
