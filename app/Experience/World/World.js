import * as THREE from "three";
import { EventEmitter } from "events";
import Experience from "../Experience.js";

export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.localStorage = this.experience.localStorage;
        this.state = this.localStorage.state;
        console.log(this.state);

        this.resources.determineLoad(this.state.location);

        this.resources.on("ready", () => {});
    }

    update() {}
}
