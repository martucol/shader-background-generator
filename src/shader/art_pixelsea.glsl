#pragma glslify: noise3d = require('glsl-noise/simplex/3d');

vec3 pixelsea (vec2 st, float time, float size) {

    // mosaic
    st *= size; // Scale the coordinate system by 10
    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    return vec3(noise3d( vec3(ipos, time)));
}

#pragma glslify: export(pixelsea);
