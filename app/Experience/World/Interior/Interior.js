import Castle from "./Components/Castle.js";
import Interactions from "./Components/Interactions.js";

export default class WhiteRun {
    constructor() {
        this.castle = new Castle();
        this.interactions = new Interactions();
    }

    resize() {}

    update() {}
}
