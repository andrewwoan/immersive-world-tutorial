import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Buildings {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.buildings = this.resources.items.whiterun.buildings.scene;
        this.buildings_texture =
            this.resources.items.whiterun.buildings_texture;
    }

    setMaterials() {
        this.buildings_texture.flipY = false;
        this.buildings_texture.encoding = THREE.sRGBEncoding;

        this.buildings.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.buildings_texture,
            });
        });

        this.scene.add(this.buildings);
    }
}
