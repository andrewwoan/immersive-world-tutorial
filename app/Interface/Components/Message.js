export default class Message {
    constructor(elements, key) {
        this.elements = elements;
        this.key = key;
        console.log(this.elements);
    }

    setCrosshair(message) {
        if (message === "" || message === undefined || message === null) {
            this.elements.crosshair.classList.add("hidden");
        } else {
            this.elements.crosshair.classList.remove("hidden");
        }
    }

    setMessage(message) {
        const newMsg = message.toLowerCase();

        if (newMsg.includes("door")) {
            this.elements.message.innerHTML = `Go through door`;
        } else if (newMsg.includes("sign")) {
            this.elements.message.innerHTML = `Read`;
        } else if (newMsg.includes("teleporter")) {
            this.elements.message.innerHTML = `Travel`;
        } else {
            this.elements.message.innerHTML = "";
        }
    }
}
