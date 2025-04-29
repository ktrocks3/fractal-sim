import GUI from 'lil-gui';

export default class UIControls {
    constructor(callbacks) {
        this.gui = new GUI({ title: 'Controls' });
        this.callbacks = callbacks;
        this.params = {
            branching: 3,
            scale: 0.7,
            theme: 'default',
            start: () => {}
        };
    }

    init() {
        this.gui.add(this.params, 'branching', 1, 6, 1)
            .onChange(this.callbacks.onBranchChange);
        this.gui.add(this.params, 'scale', 0.3, 0.9, 0.01)
            .onChange(this.callbacks.onScaleChange);
        this.gui.add(this.params, 'theme', ['default', 'blood', 'sap'])
            .onChange(this.callbacks.onSkinChange);
        this.gui.add(this.params, 'start').name('Start Simulation')
            .onFinishChange(this.callbacks.onStart);
    }
}