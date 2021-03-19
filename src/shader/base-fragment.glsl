precision highp float;

uniform float u_time;
uniform float u_width;
uniform float u_height;
uniform vec2 u_resolution;
uniform float u_aspect;

// Colores nayra
vec3 nayra_verdeoscuro = vec3(0.023, 0.137, 0.176); // 06232D
vec3 nayra_verdeclaro = vec3(0.294, 0.713, 0.611); // 4BB69C
vec3 nayra_rojo = vec3(0.901, 0.211, 0.156); // E63628
vec3 nayra_naranja = vec3(0.921, 0.396, 0.137); // EB6523
vec3 nayra_amarillo = vec3(0.960, 0.635, 0.133); // F5A222
vec3 nayra_negro = vec3(0.007, 0.011, 0.015); // 020304

vec3 colornaranja = vec3(1, 0.424, 0);
vec3 colorturquesa = vec3(0.118, 0.424, 0.816);

#pragma glslify: noise3d = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
#pragma glslify: random = require("./random.glsl");
#pragma glslify: addnoiselayer = require("./add-noise-layer.glsl");

// tests/art 
#pragma glslify: pixelsea = require("./art_pixelsea.glsl");
#pragma glslify: greenpinkpsy = require("./art_greenpinkpsy.glsl");

void main () {
    // UTILITIES SECTION //

    // normalized position of each fragment
    float normalizedX = (gl_FragCoord.x/u_resolution.x) * 2. -1.;
    float normalizedY = (gl_FragCoord.y/u_resolution.y) * 2. -1.;
    vec2 pos = vec2(normalizedX, normalizedY);

    // st
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // random
    float rnd = random( st , u_time);

    // mosaic
    st *= 10.0;
    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    // center of the image is (0.0, 0.0)
    vec2 center = vec2(0.0);

    // if you want to make a perfect proportion , add this line to avoid circle being wider on x because of horizontal screens
    pos.x *= u_aspect;

    // create a circular mask
    float dist = length(center - pos);
    float alpha = smoothstep(0.47, 0.55, dist);



    // CREATIVE SECTION //

    // unused
    // vec3 greenpinkart = greenpinkpsy(pos, u_time);
    // vec3 final = mix(greenpinkart, beautifulsea, alpha);

    vec3 beautifulsea = addnoiselayer(nayra_verdeoscuro, pixelsea(st, u_time));


    // do not touch alpha in here. if wanting to modify "alpha" of layers, use mix function before this. 
    gl_FragColor = vec4(beautifulsea, 1.0);
}