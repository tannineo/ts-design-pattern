import GUIFactory from '../interfaces/guiFactory'
import Button from '../interfaces/button'
import Checkbox from '../interfaces/checkbox'

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton()
  }

  createCheckbox(): Button {
    return new WinCheckbox()
  }
}

class WinButton implements Button {
  name = 'WinButton'

  paint(): void {
    console.log('WinButton')
  }
}

class WinCheckbox implements Checkbox {
  name = 'WinCheckbox'

  paint(): void {
    console.log('WinCheckbox')
  }
}

export { WinFactory, WinButton, WinCheckbox }
