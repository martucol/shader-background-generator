"use strict" 
const glsl = require("glslify");
const twgl = require("twgl.js");
const {WEBGL} = require("./js/webgl.js");

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
