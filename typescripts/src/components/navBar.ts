export const navBarHeight = 40

export function createNavBar(title: string): HTMLDivElement {
    const navBar = document.createElement("div")
    navBar.style.boxSizing = "border-box"
    navBar.style.height = `${navBarHeight}px`
    navBar.style.width = "100%"
    navBar.style.background = "linear-gradient(to right, #8a3ab9, #4c68d7, #cd486b, #fbad50, #fccc63, #bc2a8d, #e95950)"

    const span = document.createElement("span")
    span.style.boxSizing = "border-box"
    span.innerText = "GoChat"
    span.style.color = "white"
    span.style.fontFamily = "Comic Sans MS"
    span.style.margin = "auto"
    span.style.fontSize = "28px"
    span.style.fontWeight = "bold"
    navBar.appendChild(span)

    return navBar
}