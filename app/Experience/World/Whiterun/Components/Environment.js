import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.setSkyBox();
    }

    setSkyBox() {
        this.skyboxTexture = this.resources.items.whiterun.skyboxTexture;
        this.skyboxTexture.encoding = THREE.sRGBEncoding;
        this.scene.background = this.skyboxTexture;
    }
}
