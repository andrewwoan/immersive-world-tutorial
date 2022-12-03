import "./main.css";
import Experience from "./Experience/Experience.js";
import Interface from "./Interface/Interface.js";

class Main {
    constructor() {
        this.createInterface();
        this.createExperience();
    }

    createInterface() {
        this.interface = new Interface();
    }

    createExperience() {
        this.experience = new Experience(
            document.querySelector("canvas.experience-canvas")
        );

        this.experience.world.on("updateMessage", (objectName) => {
            this.interface.message.setCrosshair(objectName);
            this.interface.message.setMessage(objectName);
        });
    }
}

new Main();
