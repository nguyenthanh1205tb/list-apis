export type Events = {
  [key: string]: { (data: any): void }[]
}

export interface EventEmitter {
  _events: Events
  dispatch(event: string, data?: any): void
  subscribe(event: string, callback: (data: any) => any): void
  unsubscribe(event: string): void
}

const Emitter: EventEmitter = {
  _events: {},
  dispatch(event, data) {
    if (!this._events[event]) return
    this._events[event].forEach(callback => callback(data))
  },
  subscribe(event, callback: (data: any) => any) {
    if (!this._events[event]) this._events[event] = []
    this._events[event].push(callback)
  },
  unsubscribe(event) {
    if (!this._events[event]) return
    delete this._events[event]
  },
}

export default Emitter
