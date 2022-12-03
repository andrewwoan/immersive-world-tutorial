import Message from "./Components/Message.js";
import Elements from "./Utils/Elements.js";
import key from "./Utils/key.js";

export default class Interface {
    constructor() {
        this.key = key;
        this.elements = new Elements().elements;
        this.message = new Message(this.elements, key);
    }
}
