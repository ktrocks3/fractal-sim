import * as THREE from 'three';

export default class FractalGenerator {
    constructor(sceneMgr, themeMgr) {
        this.scene = sceneMgr.scene;
        this.themeMgr = themeMgr;
        this.branching = 3;
        this.scale = 0.7;
        this.root = null;
    }

    setBranching(n) {
        this.branching = n;
        this._regen();
    }

    setScale(s) {
        this.scale = s;
        this._regen();
    }

    _regen() {
        if (this.root) this.scene.remove(this.root);
        this.root = new THREE.Group();
        this.scene.add(this.root);
        this._buildBranch(new THREE.Vector3(0, -5, 0), new THREE.Vector3(0, 1, 0), 5);
    }

    _buildBranch(pos, dir, depth) {
        if (depth === 0) return;
        const length = depth;
        const geom = new THREE.CylinderGeometry(0.1 * Math.pow(this.scale, depth), 0.1 * Math.pow(this.scale, depth-1), length, 8);
        const mat = this.themeMgr.getMaterial();
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.copy(pos).add(dir.clone().multiplyScalar(length/2));
        mesh.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0), dir.clone().normalize()
        );
        this.root.add(mesh);
        for (let i = 0; i < this.branching; i++) {
            const newDir = dir.clone()
                .applyAxisAngle(new THREE.Vector3(1, 0, 0), (Math.random() - 0.5) * Math.PI / 4)
                .applyAxisAngle(new THREE.Vector3(0, 0, 1), (Math.random() - 0.5) * Math.PI / 4);
            const newPos = pos.clone().add(dir.clone().multiplyScalar(length));
            this._buildBranch(newPos, newDir, depth - 1);
        }
    }
}