import { EventManager } from './eventManager'

const EditorEvent = {
  EVENT_OPEN_FILE: 'open',
  EVENT_SAVE_FILE: 'save',
}

class Editor {
  eventManager: EventManager = new EventManager()
  filepath = ''

  openFile(path: string): void {
    this.filepath = path
    // ...
    this.eventManager.notify(EditorEvent.EVENT_OPEN_FILE, this.filepath)
  }

  saveFile(): void {
    // ...
    this.eventManager.notify(EditorEvent.EVENT_SAVE_FILE, this.filepath)
  }
}

export { Editor, EditorEvent }
