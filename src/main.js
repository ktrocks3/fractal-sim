import './style.css';
import * as THREE from 'three';
import SceneManager from './scene/SceneManager.js';
import UIControls from './controls/UIControls.js';
import FractalGenerator from './generator/FractalGenerator.js';
import FlowSimulator from './simulation/FlowSimulator.js';
import ThemeManager from './theme/ThemeManager.js';

// 1. Scene & Renderer
const sceneMgr = new SceneManager(document.getElementById('app'));

// 2. Theme Manager
const themeMgr = new ThemeManager(sceneMgr);

// 3. Fractal Generator
const fractalGen = new FractalGenerator(sceneMgr, themeMgr);

// 4. Flow Simulator
const flowSim = new FlowSimulator(fractalGen, sceneMgr);

// 5. UI Controls
const ui = new UIControls({
    onBranchChange: (v) => fractalGen.setBranching(v),
    onScaleChange: (v) => fractalGen.setScale(v),
    onSkinChange: (theme) => themeMgr.setTheme(theme),
    onStart: () => flowSim.start(),
});

ui.init();
sceneMgr.animate();