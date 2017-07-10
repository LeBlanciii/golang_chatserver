import {SocketService} from "./socketService"

export class ChatConnection {
    public messages: string[]

    public constructor(private socket: SocketService, private messageBoard: HTMLDivElement, private messageInput: HTMLInputElement) {
        this.messages = []
        this.socket.getEventListener().listen(incoming => {
            if (incoming.action === "message") {
                let data = incoming.message
                if (incoming.sender) {
                    // data = incoming.sender + ": " + incoming.message
                    data = incoming.message
                }
                this.messages.push(data)
                // messageBoard.innerText = `${messageBoard.innerText}\n ${data}`
                const message = document.createElement("div")
                message.innerText = data
                message.style.textAlign = "right"
                message.style.height = "15px"
                messageBoard.appendChild(message)
                console.log(messageBoard.scrollHeight)
                messageBoard.scrollTop = messageBoard.scrollHeight
            }
            if (incoming.action === "close") {
                this.messages.push(incoming.message)
                messageBoard.innerText = `${messageBoard.innerText}\n ${incoming.message}`
            }
            if (incoming.action === "open") {
                this.messages.push(incoming.message)
                for (const message of this.messages) {
                    messageBoard.innerText = `${messageBoard.innerText}\n ${message}`
                }

            }
        })
        window.onbeforeunload = () => {
            this.socket.close()
        }
    }

    public send(): void {
        if (this.messageInput.value) {
            this.socket.send(this.messageInput.value)
            this.messageInput.value = ""
        }
    }

    public isSystemMessage(message: string): string {
        return message.startsWith("/") ? "<strong>" + message.substring(1) + "</strong>" : message
    }
}