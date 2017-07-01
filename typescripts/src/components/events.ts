// Used from CB

class Params {
    reportIfNoListeners = true
    maxHistorySize = 10  // newly connected listeners can read up to maxHistorySize old messages when starting
    listenersWarningThreshold = 5
}

export class EventRouter<T> {
    private listeners: ((event: T) => void)[] = []
    private options: Params
    private history: T[] = []

    constructor(private eventName: string, options?: Partial<Params>) {
        this.options = Object.assign(new Params(), options)
    }

    public listen(listener: (event: T) => void, syncHistory = true): void {
        this.listeners.push(listener)
        if (syncHistory) {
            for (const event of this.history) {
                listener(event)
            }
        }
        if (this.listeners.length > this.options.listenersWarningThreshold) {
            // warn(`EventRouter "${this.eventName}" has ${this.listeners.length} listeners which exceeds the threshold of ${this.options.listenersWarningThreshold}`)
        }
    }

    // fire sends the event to every listener
    public fire(event: T): void {
        const historyLen = this.history.push(event)
        if (historyLen > this.options.maxHistorySize) {
            this.history.shift()
        }
        if (this.listeners.length === 0 && this.options.reportIfNoListeners) {
            // debug(`No listeners for event: ${this.eventName}`)
        }
        for (const listener of this.listeners) {
            listener(event)
        }
    }

    public removeListener(listener: (event: T) => void): void {
        const i = this.listeners.indexOf(listener)
        if (i >= 0) {
            this.listeners.splice(i, 1)
        }
    }
}