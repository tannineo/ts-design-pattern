import { Editor, EditorEvent } from '@src/behavioral/observer/impls/editor'
import {
  EmailListener,
  LoggingListener,
} from '@src/behavioral/observer/impls/editorEventListeners'

test('test observer', () => {
  const editor = new Editor()
  const emailListener = new EmailListener()
  const loggingListener = new LoggingListener()

  editor.eventManager.subscribe(EditorEvent.EVENT_OPEN_FILE, loggingListener)
  editor.eventManager.subscribe(EditorEvent.EVENT_SAVE_FILE, loggingListener)
  editor.eventManager.subscribe(EditorEvent.EVENT_SAVE_FILE, emailListener)

  editor.openFile('./2333.txt')
  editor.saveFile()

  expect(loggingListener.logEntries.length).toBe(2)
  expect(emailListener.emailEntries.length).toBe(1)
})
