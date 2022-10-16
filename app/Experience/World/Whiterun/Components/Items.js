import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Items {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.landscape_items =
            this.resources.items.whiterun.landscape_items.scene;
        // this.landscape_items_texture =
        //     this.resources.items.whiterun.landscape_items_texture;
    }

    setMaterials() {
        // this.landscape_items_texture.flipY = false;
        // this.landscape_items_texture.encoding = THREE.sRGBEncoding;

        this.landscape_items.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                // map: this.landscape_items_texture,
                color: 0xff0000,
            });
        });

        this.scene.add(this.landscape_items);
    }
}
