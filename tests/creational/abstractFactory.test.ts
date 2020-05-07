import GUIFactory from '@src/creational/abstractFactory/interfaces/guiFactory'
import { WinFactory } from '@src/creational/abstractFactory/entities/windows'
import Button from '@src/creational/abstractFactory/interfaces/button'
import Checkbox from '@src/creational/abstractFactory/interfaces/checkbox'
import { MacFactory } from '@src/creational/abstractFactory/entities/macos'

test('abstractFactory test', () => {
  let factory: GUIFactory
  let button: Button
  let checkbox: Checkbox

  factory = new WinFactory()
  button = factory.createButton()
  checkbox = factory.createCheckbox()

  expect(button.name).toBe('WinButton')
  expect(checkbox.name).toBe('WinCheckbox')

  factory = new MacFactory()
  button = factory.createButton()
  checkbox = factory.createCheckbox()

  expect(button.name).toBe('MacButton')
  expect(checkbox.name).toBe('MacCheckbox')
})
