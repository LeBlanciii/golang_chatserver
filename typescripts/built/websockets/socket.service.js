import { EventRouter } from "../components/events";
const actionHandlerMap = {
    "onOpenHandler": () => {
    },
    "onCloseHandler": () => {
    },
    "onMessageHandler": () => {
    },
};
export class SocketService {
    constructor() {
        this.listener = new EventRouter("SocketServiceEvent");
        this.socket = new WebSocket("ws://localhost:8080/ws");
        this.socket.onopen = event => {
            this.listener.fire({
                "action": "open",
                "sender": "???",
                "message": "/The socket connection has been established.",
            });
        };
        this.socket.onclose = event => {
            this.listener.fire({
                "action": "close",
                "sender": "???",
                "message": "/The socket connection has been closed.",
            });
        };
        this.socket.onmessage = event => {
            this.listener.fire(this.parseOnMessage(event));
        };
    }
    send(data) {
        this.socket.send(data);
    }
    close() {
        this.socket.close();
    }
    parseOnMessage(ev) {
        const parsed = JSON.parse(ev.data);
        // if (parsed !== undefined) {
        return { "action": "message", "sender": parsed.sender, "message": parsed.content };
        // }
    }
    getEventListener() {
        return this.listener;
    }
}
