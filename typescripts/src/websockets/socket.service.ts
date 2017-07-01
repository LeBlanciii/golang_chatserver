import {EventRouter} from "../components/events"

const actionHandlerMap = {
    "onOpenHandler": () => {
    },
    "onCloseHandler": () => {
    },
    "onMessageHandler": () => {
    },

}
interface IMessage {
    action: string
    sender: string
    message: string
}
export class SocketService {
    private socket: WebSocket
    private listener = new EventRouter<IMessage>("SocketServiceEvent")

    public constructor() {
        this.socket = new WebSocket("ws://localhost:8080/ws")
        this.socket.onopen = event => {
            this.listener.fire({
                "action": "open",
                "sender": "???",
                "message": "/The socket connection has been established.",
            })
        }
        this.socket.onclose = event => {
            this.listener.fire({
                "action": "close",
                "sender": "???",
                "message": "/The socket connection has been closed.",
            })
        }
        this.socket.onmessage = event => {
            this.listener.fire(this.parseOnMessage(event))
        }
    }

    send(data: string): void {
        this.socket.send(data)
    }

    close(): void {
        this.socket.close()
    }

    parseOnMessage(ev: MessageEvent): IMessage {
        const parsed = JSON.parse(ev.data)
        // if (parsed !== undefined) {
        return {"action": "message", "sender": parsed.sender, "message": parsed.content}
        // }
    }

    getEventListener(): EventRouter<IMessage> {
        return this.listener
    }

}
