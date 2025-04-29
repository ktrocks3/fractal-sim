export default class FlowSimulator {
    constructor(fractalGen, sceneMgr) {
        this.fractalGen = fractalGen;
        this.scene = sceneMgr.scene;
        this.running = false;
    }

    start() {
        if (this.running) return;
        this.running = true;
        // Simple demo: pulse color changes
        this.scene.traverse(obj => {
            if (obj.material) {
                obj.material.emissive = obj.material.color.clone();
            }
        });
    }
}