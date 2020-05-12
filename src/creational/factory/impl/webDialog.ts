import { Dialog } from './dialog'
import { Button } from '../interfaces/button'
import { WebButton } from './webButton'

class WebDialog extends Dialog {
  createButton(): Button {
    return new WebButton()
  }
}

export { WebDialog }
