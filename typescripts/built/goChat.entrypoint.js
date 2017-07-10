import { SocketService } from "./websockets/socketService";
import { createNavBar } from "./components/navBar";
import { createMessageBoard } from "./chatPage/messageBoard";
import { ChatConnection } from "./websockets/chatConnection";
import { MessageInput } from "./chatPage/messageInput";
class GoChatRoot {
    constructor() {
        document.body.style.margin = "0";
        this.mainCanvas = document.createElement("div");
        this.mainCanvas.style.position = "fixed";
        this.mainCanvas.style.boxSizing = "border-box";
        this.mainCanvas.style.height = "100%";
        this.mainCanvas.style.width = "100%";
        this.mainCanvas.style.top = "0";
        this.mainCanvas.style.left = "0";
        document.body.appendChild(this.mainCanvas);
        this.navBarDiv = createNavBar("GoChat");
        this.messageBoardDiv = createMessageBoard();
        this.inputSegment = new MessageInput();
        this.mainCanvas.appendChild(this.navBarDiv);
        this.mainCanvas.appendChild(this.messageBoardDiv);
        this.mainCanvas.appendChild(this.inputSegment.div);
        this.reposition();
        const chatConnection = new ChatConnection(new SocketService(), this.messageBoardDiv, this.inputSegment.input);
        window.onkeypress = (e) => {
            this.inputSegment.input.focus();
            const key = e.which || e.keyCode;
            if (key === 13) {
                chatConnection.send();
                e.preventDefault();
            }
        };
        window.onresize = () => {
            this.reposition();
        };
    }
    reposition() {
        this.messageBoardDiv.style.height = `${this.mainCanvas.clientHeight - this.inputSegment.div.clientHeight - 5 - this.navBarDiv.clientHeight}px`;
        this.inputSegment.form.style.width = `${this.inputSegment.div.clientWidth - (this.inputSegment.cameraImage.clientWidth + 15)}px`;
    }
}
const goChat = new GoChatRoot();
