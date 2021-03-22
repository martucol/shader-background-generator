"use strict" 
const glsl = require("glslify");
const twgl = require("twgl.js");
const {WEBGL} = require("./js/webgl.js");
const dat = require('dat.gui');

// Set up params
const gui = new dat.GUI();

gui.addFolder('noise mixing params');
const noisemixparams = {
    amount: 0.5,
    mix_amount: 0.0105
}

gui.add(noisemixparams, 'amount', 0.0, 2.0);
gui.add(noisemixparams, 'mix_amount', 0.0, 0.02);

gui.addFolder('cell');
const cellparams = {
    size: 6.0, // between 1.0 and 50.0
    min_dist: 1.0, // between 0.1 and 1.0
    slowdown: 4.0 // the higher the value, the slower it goes
};

gui.add(cellparams, 'size', 1.0, 50.0);
gui.add(cellparams, 'min_dist', 0.1, 1.0);
gui.add(cellparams, 'slowdown', 0.5, 10.0);



const vertexShader = glsl.file("./shader/vertex.glsl"); 
const fragmentShader = glsl.file("./shader/base-fragment.glsl"); 

const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const mouse = [0, 0];

document.addEventListener("mousemove", e => {
    mouse[0] = e.clientX;
    mouse[1] = e.clientY;
});

const programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader]);

const arrays = {
    position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const uniforms = {
        u_time: time * 0.001,
        u_resolution: [gl.canvas.width, gl.canvas.height],
        u_mouse: mouse,
        u_aspect: gl.canvas.width/gl.canvas.height,
        // noise mixing params
        u_noise_amount: noisemixparams.amount,
        u_noise_mix_amount: noisemixparams.mix_amount,
        // cell params
        u_cell_size: cellparams.size,
        u_cell_m_dist: cellparams.min_dist,
        u_cell_slowdown: cellparams.slowdown
    };

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, bufferInfo);

    requestAnimationFrame(render);
}

if ( WEBGL.isWebGLAvailable() ) {
    console.log('WebGL available');

	requestAnimationFrame(render);
} else {

	const warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'canvas' ).appendChild( warning );
}
