export function createMessageInput() {
    const inputDiv = document.createElement("div");
    inputDiv.style.position = "absolute";
    inputDiv.style.boxSizing = "border-box";
    inputDiv.style.width = "100%";
    inputDiv.style.height = `${inputDivHeight}px`;
    inputDiv.style.bottom = "0";
    inputDiv.style.left = "0";
    const inputForm = document.createElement("form");
    inputForm.style.height = "100%";
    inputForm.style.marginLeft = "10px";
    inputForm.style.display = "inline-block";
    inputForm.style.boxSizing = "border-box";
    const messageInput = document.createElement("input");
    messageInput.style.width = "100%";
    messageInput.type = "text";
    messageInput.style.border = "solid 1px #dbdbdb";
    messageInput.style.borderRadius = "10px";
    messageInput.style.padding = "5px";
    messageInput.style.color = "#262626";
    messageInput.style.fontSize = "20px";
    messageInput.style.overflow = "hidden";
    messageInput.style.boxSizing = "border-box";
    messageInput.autocomplete = "off";
    inputForm.appendChild(messageInput);
    inputDiv.appendChild(inputForm);
    const sendButton = document.createElement("span");
    sendButton.style.position = "absolute";
    sendButton.innerText = "SEND";
    sendButton.style.borderRadius = "9px";
    sendButton.style.fontSize = "1em";
    sendButton.style.padding = "5px 8px 4px";
    sendButton.style.marginLeft = "8px";
    sendButton.style.marginRight = "8px";
    sendButton.style.marginTop = "4px";
    sendButton.style.backgroundColor = "#cd486b";
    sendButton.style.color = "#ffffff";
    sendButton.style.fontFamily = "Helvetica, Arial, sans-serif";
    sendButton.style.background = "linear-gradient(#f66d51, #eb3404)";
    sendButton.style.boxSizing = "border-box";
    sendButton.style.cursor = "pointer";
    inputDiv.appendChild(sendButton);
}