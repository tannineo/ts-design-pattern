import { Button } from '../interfaces/button'

class WindowsButton implements Button {
  info = 'WindowsButton'

  render(): void {
    console.log('WindowsButton render()')
  }

  onClick(cb: Function): void {
    console.log('WindowsButton onClick()')
    cb()
  }
}

export { WindowsButton }
