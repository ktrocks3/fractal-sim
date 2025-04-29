import * as THREE from 'three';

export default class ThemeManager {
    constructor(sceneMgr) {
        this.themes = {
            default: new THREE.MeshStandardMaterial({ color: 0x888888 }),
            blood:   new THREE.MeshStandardMaterial({ color: 0xaa0000 }),
            sap:     new THREE.MeshStandardMaterial({ color: 0x00aa00 }),
        };
        this.current = this.themes.default;
    }

    setTheme(name) {
        this.current = this.themes[name] || this.themes.default;
    }

    getMaterial() {
        return this.current;
    }
}