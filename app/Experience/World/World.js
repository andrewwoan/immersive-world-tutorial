import * as THREE from "three";
import { EventEmitter } from "events";
import Experience from "../Experience.js";

import { Octree } from "three/examples/jsm/math/Octree";

import Whiterun from "./Whiterun/Whiterun.js";
// import Interior from "./Interior/Interior.js";

export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.octree = new Octree();

        this.localStorage = this.experience.localStorage;
        this.state = this.localStorage.state;

        this.resources.determineLoad(this.state.location);

        this.resources.on("ready", () => {
            this.setWorld();
        });
    }

    setWorld() {
        this.whiterun = new Whiterun();
        // this.interior = new Interior();
    }

    update() {}
}
