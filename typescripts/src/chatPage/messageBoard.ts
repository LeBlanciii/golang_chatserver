export function createMessageBoard(): HTMLDivElement {
    const messageBoardWrapper = document.createElement("div")
    messageBoardWrapper.style.padding = "10px 0"
    messageBoardWrapper.style.boxSizing = "border-box"
    messageBoardWrapper.style.width = "100%"
    messageBoardWrapper.style.backgroundColor = "rgba(142,142,142, 0.05)"
    messageBoardWrapper.style.overflowX = "hidden"
    messageBoardWrapper.style.overflowY = "scroll"

    const messageBoard = document.createElement("div")
    messageBoard.style.boxSizing = "border-box"
    messageBoard.style.color = "#262626"
    messageBoard.style.fontSize = "26px"
    messageBoardWrapper.appendChild(messageBoard)

    return messageBoardWrapper
}