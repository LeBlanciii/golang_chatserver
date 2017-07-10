const inputDivHeight = 38;
export class MessageInput {
    constructor() {
        this.div = document.createElement("div");
        this.div.style.boxSizing = "border-box";
        this.div.style.width = "100%";
        this.div.style.height = `${this.div}px`;
        this.div.style.marginBottom = `5px`;
        this.div.style.bottom = "0";
        this.div.style.left = "0";
        this.form = document.createElement("form");
        this.form.style.display = "inline-block";
        this.form.style.height = "100%";
        this.form.style.marginLeft = "45px";
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
        this.cameraImage = document.createElement("img");
        this.cameraImage.style.display = "inline-block";
        this.cameraImage.style.boxSizing = "border-box";
        this.cameraImage.src = `./assets/camera.svg`;
        this.cameraImage.style.height = "35px";
        this.cameraImage.style.width = "35px";
        this.cameraImage.style.marginLeft = "5px";
        this.cameraImage.style.position = "absolute";
        this.cameraImage.style.bottom = "5";
        this.div.appendChild(this.cameraImage);
        this.div.appendChild(this.form);
    }
}
