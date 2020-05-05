import { Dialog } from '@src/creational/factory/entities/dialog'
import { WindowsDialog } from '@src/creational/factory/entities/windowsDialog'
import { WebDialog } from '@src/creational/factory/entities/webDialog'

test('test factory WindowsDialog', () => {
  const dialog = new WindowsDialog()
  const button = dialog.createButton()

  expect(button.info).toBe('WindowsButton')
})

test('test factory WebDialog', () => {
  const dialog = new WebDialog()
  const button = dialog.createButton()

  expect(button.info).toBe('WebButton')
})
