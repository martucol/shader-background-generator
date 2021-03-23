#pragma glslify: noise3d = require('glsl-noise/simplex/3d');

float organic_noise (vec2 st, float time, float size) {
    // mosaic
    st *= size; // Scale the coordinate system by 10
    // vec2 ipos = floor(st);  // get the integer coords
    // vec2 fpos = fract(st);  // get the fractional coords

    return noise3d( vec3(st, time));
}

#pragma glslify: export(organic_noise);
