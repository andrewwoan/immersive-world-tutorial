import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Walls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.walls = this.resources.items.whiterun.walls.scene;
        this.walls_texture = this.resources.items.whiterun.walls_texture;
    }

    setMaterials() {
        this.walls_texture.flipY = false;
        this.walls_texture.encoding = THREE.sRGBEncoding;

        this.walls.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.walls_texture,
            });
        });

        this.scene.add(this.walls);
    }
}
