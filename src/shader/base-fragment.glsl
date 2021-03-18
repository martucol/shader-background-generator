precision highp float;

uniform float u_time;
uniform float u_width;
uniform float u_height;
uniform vec2 u_resolution;
uniform float u_aspect;

vec3 colorppalrojo = vec3(0.647, 0.004, 0.004);
vec3 colorppalazul = vec3(0.012, 0, 0.518);
vec3 colornaranja = vec3(1, 0.424, 0);
vec3 colorturquesa = vec3(0.118, 0.424, 0.816);

#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
#pragma glslify: random = require("./random.glsl");
#pragma glslify: addnoiselayer = require("./add-noise-layer.glsl");


void main () {
    // normalized position of each fragment
    float normalizedX = (gl_FragCoord.x/u_resolution.x) * 2. -1.;
    float normalizedY = (gl_FragCoord.y/u_resolution.y) * 2. -1.;
    vec2 pos = vec2(normalizedX, normalizedY);

    // st
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // random
    float rnd = random( st , u_time );

    // center of the image is (0.0, 0.0)
    vec2 center = vec2(0.0);

    // if you want to make a perfect proportion , add this line to avoid circle being wider on x because of horizontal screens
    pos.x *= u_aspect;

    // this is to create a circular mask
    float dist = length(center - pos);
    float alpha = smoothstep(0.55, 0.95, dist);

    float n = noise(vec3(normalizedX, normalizedY, u_time*.3));
    vec3 color = vec3(n+0.2, cos(n), n*5.);
    vec3 masked = mix(color, vec3(colornaranja), alpha);

    vec3 final = addnoiselayer(masked, rnd);
    
    // do not touch alpha in here. if wanting to modify "alpha" of layers, use mix function before this. 
    gl_FragColor = vec4(final, 1.0);
}