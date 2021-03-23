"use strict" 
const glsl = require("glslify");
const twgl = require("twgl.js");
const {WEBGL} = require("./js/webgl.js");
const dat = require('dat.gui');

const vertexShader = glsl.file("./shader/vertex.glsl"); 
const fragmentShader = glsl.file("./shader/base-fragment.glsl"); 

const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const mouse = [0, 0];



// Set up GUI params
const gui = new dat.GUI();

const guiPatterns = gui.addFolder('patterns');
const patterns = {
    a: true,
    b: false,
    c: false
}
guiPatterns.add(patterns, 'a').name('pattern 1').listen().onChange(function(){setCheckedPattern("a")});
guiPatterns.add(patterns, 'b').name('pattern 2').listen().onChange(function(){setCheckedPattern("b")});
guiPatterns.add(patterns, 'c').name('pattern 3').listen().onChange(function(){setCheckedPattern("c")});

function setCheckedPattern( prop ){
    for (let param in patterns){
        patterns[param] = false;
    }
    patterns[prop] = true;
}
  

const guiPalletes = gui.addFolder('colors');
const colorParams = {
    a: {
        primary: [0.023, 0.137, 0.176], //verdeoscuro,
        secondary: [0.921, 0.396, 0.137] // naranja
    },
    b: {
        primary: [0.921, 0.396, 0.137], // naranja
        secondary: [0.023, 0.137, 0.176] //verdeoscuro,
    },
    c: {
        primary: [1.00, 1.0, 1.0], // blanco,
        secondary: [0.921, 0.396, 0.137] // naranja
    },
    d: {
        primary: [0.023, 0.137, 0.176], //verdeoscuro,
        secondary: [0.294, 0.713, 0.611] // verdeclaro
    },
    e: {
        primary: [0.294, 0.713, 0.611], // verdeclaro
        secondary: [0.023, 0.137, 0.176] // verdeoscuro
    },
    f: {
        primary: [0.901, 0.211, 0.156], //rojo,
        secondary: [0.023, 0.137, 0.176] // verdeoscuro
    },
    g: {
        primary: [1.00, 1.0, 1.0], // blanco,
        secondary: [0.023, 0.137, 0.176] // verdeoscuro
    },
    h: {
        primary: [1.00, 1.0, 1.0], // blanco,
        secondary: [0.294, 0.713, 0.611] // verdeclaro
    }
}
let selectedPalette = 'a';
const palette = {
    a: true,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
};
guiPalletes.add(palette, 'a').name('palette 1').listen().onChange(function(){setCheckedPallete("a")});
guiPalletes.add(palette, 'b').name('palette 2').listen().onChange(function(){setCheckedPallete("b")});
guiPalletes.add(palette, 'c').name('palette 3').listen().onChange(function(){setCheckedPallete("c")});
guiPalletes.add(palette, "d").name('palette 4').listen().onChange(function(){setCheckedPallete("d")});
guiPalletes.add(palette, "e").name('palette 5').listen().onChange(function(){setCheckedPallete("e")});
guiPalletes.add(palette, "f").name('palette 6').listen().onChange(function(){setCheckedPallete("f")});
guiPalletes.add(palette, "g").name('palette 7').listen().onChange(function(){setCheckedPallete("g")});
guiPalletes.add(palette, "h").name('palette 8').listen().onChange(function(){setCheckedPallete("h")});


function setCheckedPallete( prop ){
  for (let param in palette){
    palette[param] = false;
  }
  palette[prop] = true;
  selectedPalette = prop;
}

const guiGeneral = gui.addFolder('general');
const generalparams = {
    size: 5.0,
    colorBalance: 0.0,
    slowdown: 4.0 // the higher the value, the slower it goes
};
guiGeneral.add(generalparams, 'size', 0.5, 60.0);
guiGeneral.add(generalparams, 'colorBalance', -1.0, 1.5);
guiGeneral.add(generalparams, 'slowdown', 0.5, 10.0);


const guiGradient = gui.addFolder('gradient');
const gradientparams = {
    amp: 0.4,
    base: 0.6,
    direction: false
}
guiGradient.add(gradientparams, 'amp', 0.0, 1.0).name('wide');
guiGradient.add(gradientparams, 'base', 0.0, 1.0).name('amount');
guiGradient.add(gradientparams, 'direction').name('invert direction');


const guiNoise = gui.addFolder('noise mixing');
const noisemixparams = {
    amount: 0.5,
    mix_amount: 0.0105
}
guiNoise.add(noisemixparams, 'amount', 0.0, 2.0);
guiNoise.add(noisemixparams, 'mix_amount', 0.0, 0.1);

const guiCell = gui.addFolder('cell');
const cellparams = {
    min_dist: 1.0, // between 0.1 and 1.0
};
guiCell.add(cellparams, 'min_dist', 0.1, 1.0);

const buttons = { 
    log:function(){ 
        const params = {
            palette: {
                primary: colorParams[selectedPalette].primary,
                secondary: colorParams[selectedPalette].secondary
            },
            gradient: gradientparams,
            noise: noisemixparams,
            cell: cellparams
        };
        console.log('params', params);
    },
    drawScene: false,
    export: function(){
        buttons.drawScene = true;
    }

};
gui.add(buttons,'log').name('log params');
gui.add(buttons,'export').name('export png');



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
        // general params
        u_slowdown: generalparams.slowdown,
        u_size: generalparams.size,
        u_color_balance: generalparams.colorBalance,
        // noise mixing params
        u_noise_amount: noisemixparams.amount,
        u_noise_mix_amount: noisemixparams.mix_amount,
        // cell params
        u_cell_size: cellparams.size,
        u_cell_m_dist: cellparams.min_dist,
        // color params
        u_primary_color: colorParams[selectedPalette].primary,
        u_secondary_color: colorParams[selectedPalette].secondary,
        // gradient params
        u_gradient_amp: gradientparams.amp,
        u_gradient_base: gradientparams.base,
        u_gradient_direction: gradientparams.direction ? 1.0 : -1.0,
        // pattern params
        u_pattern_a: patterns.a,
        u_pattern_b: patterns.b,
        u_pattern_c: patterns.c,
    };

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, bufferInfo);

    if (buttons.drawScene) {
        window.open(canvas.toDataURL("image/png"), '_blank');
        buttons.drawScene = false;
    }
    requestAnimationFrame(render);
}

if ( WEBGL.isWebGLAvailable() ) {
    console.log('WebGL available');

	requestAnimationFrame(render);
} else {
	const warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'canvas' ).appendChild( warning );
}
