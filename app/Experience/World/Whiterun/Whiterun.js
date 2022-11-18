import Landscape from "./Components/Landscape.js";
import Items from "./Components/Items.js";
import Interactions from "./Components/Interactions.js";
import Buildings from "./Components/Buildings.js";
import Walls from "./Components/Walls.js";
import Environment from "./Components/Environment.js";

export default class WhiteRun {
    constructor() {
        this.items = new Items();
        this.landscape = new Landscape();
        this.interactions = new Interactions();
        this.buildings = new Buildings();
        this.walls = new Walls();
        this.environment = new Environment();
    }

    resize() {}

    update() {}
}
