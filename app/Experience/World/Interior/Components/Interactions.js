import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Interactions {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.interactions =
            this.resources.items.castleInterior.interactions.scene;
        // this.interactions_texture =
        //     this.resources.items.whiterun.interactions_texture;
    }

    setMaterials() {
        // this.interactions_texture.flipY = false;
        // this.interactions_texture.encoding = THREE.sRGBEncoding;

        this.interactions.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                // map: this.interactions_texture,
                color: 0xff0000,
            });
        });

        this.scene.add(this.interactions);
    }
}
