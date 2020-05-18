import { EventListener } from '../interfaces/eventListener'

class LoggingListener implements EventListener {
  private message = 'LoggingListener Logged: '

  logEntries: string[] = []

  update(data: any): void {
    const filename = data as string
    const logginMessage = this.message + filename

    // ...

    this.logEntries.push(logginMessage)
  }
}

class EmailListener implements EventListener {
  private emailTemplate = 'email???'

  emailEntries: string[] = []

  update(data: any): void {
    const filename = data as string
    // ...
    this.emailEntries.push(this.emailTemplate + filename)
  }
}

export { LoggingListener, EmailListener }
