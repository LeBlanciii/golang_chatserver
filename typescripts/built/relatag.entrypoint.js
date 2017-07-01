document.body.style.margin = "0";
const containerDiv = document.createElement("div");
containerDiv.style.height = "100%";
containerDiv.style.width = "100%";
containerDiv.style.top = "0";
containerDiv.style.left = "0";
containerDiv.style.position = "fixed";
document.body.appendChild(containerDiv);
const navBar = document.createElement("div");
navBar.style.height = "50px";
navBar.style.background = "linear-gradient(to right, #8a3ab9, #4c68d7, #cd486b, #fbad50, #fccc63, #bc2a8d, #e95950)";
const title = document.createElement("h1");
title.style.margin = "0";
title.innerText = "GoChat";
title.style.color = "white";
title.style.fontFamily = "Comic Sans MS";
title.style.textAlign = "center";
title.style.verticalAlign = "middle";
title.style.lineHeight = "50px";
navBar.appendChild(title);
containerDiv.appendChild(navBar);
const formContainerDiv = document.createElement("div");
formContainerDiv.style.padding = "50px 10px 10px 10px";
formContainerDiv.style.display = "block";
const tagForm = document.createElement("form");
tagForm.style.display = "block";
tagForm.style.textAlign = "center";
const tagInput = document.createElement("input");
tagInput.placeholder = "#search #for #related #tags";
tagInput.style.width = "312px";
tagInput.style.border = "solid 1px #dbdbdb";
tagInput.style.borderRadius = "3px";
tagInput.style.color = "#262626";
tagInput.style.fontSize = "26px";
tagInput.style.padding = "5px 10px 5px 10px";
tagForm.appendChild(tagInput);
formContainerDiv.appendChild(tagForm);
containerDiv.appendChild(formContainerDiv);
const tagOutputDiv = document.createElement("input");
tagOutputDiv.style.color = "#262626";
tagOutputDiv.style.margin = "20px 50px";
tagOutputDiv.style.padding = "50px";
tagOutputDiv.style.borderRadius = "5px";
tagOutputDiv.style.backgroundColor = "rgba(142,142,142, 0.05)";
tagOutputDiv.innerText = "#abs #muscle #instafit #gymlife #fitnessmodel #fitnessmotivation #fitnessaddict #cardio #fitgirl #exercise #weightloss #shredded #strong #crossfit #gains #fitlife #girlswholift #nutrition #aesthetics #body #fitspiration #physique #getfit #dedication #cleaneating #muscles #yoga #nopainnogain #strength #bodybuilder ";
tagOutputDiv.style.fontSize = "26px";
tagOutputDiv.onmousedown = () => {
    tagInput.select();
    document.execCommand("copy");
};
containerDiv.appendChild(tagOutputDiv);
class AppComponent {
    constructor(socket) {
        this.socket = socket;
        this.messages = [];
        this.chatBox = "";
        this.socket.getEventListener().listen(event => {
            if (event.action === "message") {
                let data = event.payload.content;
                console.log(event.payload);
                if (event.payload.sender) {
                    data = event.payload.sender + ": " + data;
                }
                this.messages.push(data);
            }
            if (event.action === "close") {
                this.messages.push("/The socket connection has been closed");
            }
            if (event.action === "open") {
                this.messages.push("/The socket connection has been established");
            }
        });
    }
    // public ngOnInit() {
    // this.socket.getEventListener().listen(event => {
    //     if (event.action === "message") {
    //         let data = event.payload.content
    //         console.log(event.payload)
    //         if (event.payload.sender) {
    //             data = event.payload.sender + ": " + data
    //         }
    //         this.messages.push(data)
    //     }
    //     if (event.action === "close") {
    //         this.messages.push("/The socket connection has been closed")
    //     }
    //     if (event.action === "open") {
    //         this.messages.push("/The socket connection has been established")
    //     }
    // })
    // }
    ngOnDestroy() {
        this.socket.close();
    }
    send() {
        if (this.chatBox) {
            this.socket.send(this.chatBox);
            this.chatBox = "";
        }
    }
    isSystemMessage(message) {
        return message.startsWith("/") ? "<strong>" + message.substring(1) + "</strong>" : message;
    }
}
