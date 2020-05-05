import { Dialog } from './dialog'
import { Button } from '../interfaces/button'
import { WindowsButton } from './windowsButton'

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton()
  }
}

export { WindowsDialog }
