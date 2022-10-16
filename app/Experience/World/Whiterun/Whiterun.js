import Landscape from "./Components/Landscape.js";
import Breezehome from "./Components/Breezehome.js";
import Items from "./Components/Items.js";

export default class WhiteRun {
    constructor() {
        this.breezehome = new Breezehome();
        this.landscape = new Landscape();
        this.items = new Items();
    }

    resize() {}

    update() {}
}
