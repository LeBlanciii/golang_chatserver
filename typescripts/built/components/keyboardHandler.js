export class KeyboardEventHandlerChain {
    constructor() {
        this.handlers = [];
    }
    addHandler(handler) {
        this.handlers.push(handler);
    }
    execute(event) {
        for (const handler of this.handlers) {
            if (event.which === handler.keyCode && (!handler.requiresCtrlOrMeta || event.ctrlKey || event.metaKey)) {
                handler.handle(event);
                return true;
            }
        }
        return false;
    }
}
