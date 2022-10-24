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
        this.items = this.resources.items.whiterun.items.scene;
        this.items_texture = this.resources.items.whiterun.items_texture;
    }

    setMaterials() {
        this.items_texture.flipY = false;
        this.items_texture.encoding = THREE.sRGBEncoding;

        this.items.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.items_texture,
            });
        });

        this.scene.add(this.items);
    }
}
