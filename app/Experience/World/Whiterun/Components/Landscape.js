import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Landscape {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.init();
        this.setMaterials();
        this.setLandscapeCollider();
    }

    init() {
        this.landscape = this.resources.items.whiterun.land.scene;
        this.land_texture = this.resources.items.whiterun.land_texture;
    }

    setMaterials() {
        this.land_texture.flipY = false;
        this.land_texture.encoding = THREE.sRGBEncoding;

        this.landscape.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.land_texture,
            });
        });

        this.scene.add(this.landscape);
    }

    setLandscapeCollider() {
        const collider = this.landscape.getObjectByName("collider");
        this.octree.fromGraphNode(collider);
        collider.removeFromParent();
        collider.geometry.dispose();
        collider.material.dispose();

        // const helper = new OctreeHelper(this.octree);
        // helper.visible = true;
        // this.scene.add(helper);
    }
}
