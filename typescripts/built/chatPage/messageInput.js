const inputDivHeight = 38;
export class MessageInput {
    constructor() {
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.boxSizing = "border-box";
        this.div.style.width = "100%";
        this.div.style.height = `${this.div}px`;
        this.div.style.bottom = "0";
        this.div.style.left = "0";
        this.form = document.createElement("form");
        this.form.style.height = "100%";
        this.form.style.marginLeft = "10px";
        this.form.style.display = "inline-block";
        this.form.style.boxSizing = "border-box";
        this.input = document.createElement("input");
        this.input.style.width = "100%";
        this.input.type = "text";
        this.input.style.border = "solid 1px #dbdbdb";
        this.input.style.borderRadius = "10px";
        this.input.style.outline = "none";
        this.input.style.padding = "5px";
        this.input.style.color = "#262626";
        this.input.style.fontSize = "20px";
        this.input.style.overflow = "hidden";
        this.input.style.boxSizing = "border-box";
        this.input.autocomplete = "off";
        this.form.appendChild(this.input);
        this.button = document.createElement("span");
        this.button.style.position = "absolute";
        this.button.innerText = "SEND";
        this.button.style.borderRadius = "9px";
        this.button.style.fontSize = "1em";
        this.button.style.padding = "5px 8px 4px";
        this.button.style.marginLeft = "8px";
        this.button.style.marginRight = "8px";
        this.button.style.marginTop = "4px";
        this.button.style.backgroundColor = "#cd486b";
        this.button.style.color = "#ffffff";
        this.button.style.fontFamily = "Helvetica, Arial, sans-serif";
        this.button.style.background = "linear-gradient(#f66d51, #eb3404)";
        this.button.style.boxSizing = "border-box";
        this.button.style.cursor = "pointer";
        this.div.appendChild(this.form);
        this.div.appendChild(this.button);
    }
}
