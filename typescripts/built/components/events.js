// Used from CB
class Params {
    constructor() {
        this.reportIfNoListeners = true;
        this.maxHistorySize = 10; // newly connected listeners can read up to maxHistorySize old messages when starting
        this.listenersWarningThreshold = 5;
    }
}
export class EventRouter {
    constructor(eventName, options) {
        this.eventName = eventName;
        this.listeners = [];
        this.history = [];
        this.options = Object.assign(new Params(), options);
    }
    listen(listener, syncHistory = true) {
        this.listeners.push(listener);
        if (syncHistory) {
            for (const event of this.history) {
                listener(event);
            }
        }
        if (this.listeners.length > this.options.listenersWarningThreshold) {
            // warn(`EventRouter "${this.eventName}" has ${this.listeners.length} listeners which exceeds the threshold of ${this.options.listenersWarningThreshold}`)
        }
    }
    // fire sends the event to every listener
    fire(event) {
        const historyLen = this.history.push(event);
        if (historyLen > this.options.maxHistorySize) {
            this.history.shift();
        }
        if (this.listeners.length === 0 && this.options.reportIfNoListeners) {
            // debug(`No listeners for event: ${this.eventName}`)
        }
        for (const listener of this.listeners) {
            listener(event);
        }
    }
    removeListener(listener) {
        const i = this.listeners.indexOf(listener);
        if (i >= 0) {
            this.listeners.splice(i, 1);
        }
    }
}
