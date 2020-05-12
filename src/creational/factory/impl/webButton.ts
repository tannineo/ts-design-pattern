import { Button } from '../interfaces/button'

class WebButton implements Button {
  info = 'WebButton'

  render(): void {
    console.log('WebButton render()')
  }

  onClick(cb: Function): void {
    console.log('WebButton onClick()')
    cb()
  }
}

export { WebButton }
