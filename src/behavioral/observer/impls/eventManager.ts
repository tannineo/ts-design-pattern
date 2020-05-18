import * as _ from 'lodash'

import { EventListener } from '../interfaces/eventListener'

class EventManager {
  private listeners: Map<string, Array<EventListener>> = new Map()

  subscribe(eventType: string, listener: EventListener): void {
    const typeListeners = this.listeners.get(eventType)
    if (!typeListeners) {
      this.listeners.set(eventType, [listener])
    } else if (typeListeners.indexOf(listener) < 0) {
      typeListeners.push(listener)
    }
  }

  unsubscribe(eventType: string, listener: EventListener): void {
    const typeListeners = this.listeners.get(eventType)
    if (typeListeners && typeListeners.indexOf(listener) >= 0) {
      _.remove(typeListeners, l => l === listener)
    }
  }

  notify(eventType: string, data: any): void {
    const typeListeners = this.listeners.get(eventType)
    if (typeListeners) {
      typeListeners.forEach(l => l.update(data))
    }
  }
}

export { EventManager }
