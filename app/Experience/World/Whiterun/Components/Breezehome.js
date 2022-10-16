import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Breezehome {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
        this.setInstances();
    }

    init() {
        this.breezehome = this.resources.items.whiterun.breezehome.scene;
        this.breezehome_texture =
            this.resources.items.whiterun.breezehome_texture;
    }

    setMaterials() {
        this.breezehome_texture.flipY = false;
        this.breezehome_texture.encoding = THREE.sRGBEncoding;

        this.breezehome.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.breezehome_texture,
            });
        });

        this.scene.add(this.breezehome);
    }

    setInstances() {
        const dummy = new THREE.Object3D();
        const instances = 2;

        console.log(this.breezehome);

        const instancedHouse = new THREE.InstancedMesh(
            this.breezehome.children[0].geometry,
            this.breezehome.children[0].material,
            instances
        );

        instancedHouse.instanceMatrix.needsUpdate = true;

        for (let i = 0; i < instances; i++) {
            dummy.position.x = -44.79263199940674;
            dummy.position.y = 2.687559596717866;
            dummy.position.z = 90.00144759632568;
            dummy.updateMatrix();

            instancedHouse.setMatrixAt(i, dummy.matrix);
        }

        this.scene.add(instancedHouse);
    }
}
