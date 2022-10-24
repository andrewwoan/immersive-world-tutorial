import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Castle {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.castle = this.resources.items.castleInterior.castle.scene;
        this.castle_texture =
            this.resources.items.castleInterior.castle_texture;
    }

    setMaterials() {
        this.castle_texture.flipY = false;
        this.castle_texture.encoding = THREE.sRGBEncoding;

        this.castle.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.castle_texture,
            });
        });

        this.scene.add(this.castle);
    }
}
