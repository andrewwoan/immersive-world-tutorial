export default class Elements {
    constructor() {
        this.domSelectors = {
            crosshair: ".crosshair",
            message: ".message",
        };

        this.init();
    }

    init() {
        this.elements = {};

        Object.entries(this.domSelectors).forEach((selector) => {
            const key = selector[0];
            const data = selector[1];
            this.elements[key] = document.querySelector(data);
        });
    }

    getElements() {
        return this.elements;
    }
}
