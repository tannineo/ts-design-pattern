import { Button } from '../interfaces/button'

abstract class Dialog {
  abstract createButton(): Button

  render(): void {
    const button = this.createButton()
    button.onClick(() => {
      console.log('onClick')
    })
    button.render()
  }
}

export { Dialog }
