precision highp float;

uniform float u_time;
uniform float u_width;
uniform float u_height;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_aspect;

// general 
uniform float u_slowdown;
uniform float u_color_balance;
uniform float u_size;

// pattern selector
uniform bool u_pattern_a;
uniform bool u_pattern_b;
uniform bool u_pattern_c;

// noise-specific uniforms
uniform float u_noise_amount;
uniform float u_noise_mix_amount;

// cell-specific uniforms
uniform float u_cell_m_dist;

// color uniforms
uniform vec3 u_primary_color;
uniform vec3 u_secondary_color;

// gradient uniforms
uniform float u_gradient_amp;
uniform float u_gradient_base;
uniform float u_gradient_direction;

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
#pragma glslify: noise2d = require('glsl-noise/simplex/2d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
#pragma glslify: random = require("./random.glsl");
#pragma glslify: addnoiselayer = require("./add-noise-layer.glsl");

// blednding
#pragma glslify: blend_lighten = require("./blend_lighten.glsl");
#pragma glslify: blend_darken = require("./blend_darken.glsl");

// tests/art 
#pragma glslify: pixelsea = require("./art_pixelsea.glsl");
#pragma glslify: organic_noise = require("./art_organicnoise.glsl");
#pragma glslify: greenpinkpsy = require("./art_greenpinkpsy.glsl");
#pragma glslify: cell = require("./art_cell.glsl");


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
    // st *= 10.0;
    // vec2 ipos = floor(st);  // get the integer coords
    // vec2 fpos = fract(st);  // get the fractional coords

    // center of the image is (0.0, 0.0)
    vec2 center = vec2(0.0);

    // if you want to make a perfect proportion , add this line to avoid circle being wider on x because of horizontal screens
    pos.x *= u_aspect;

    // create a circular mask
    float dist = length(center - pos);
    float alpha = smoothstep(0.47, 0.55, dist);

    // simple pretty nice without too much white on it
    vec3 noiselayer = vec3(noise2d(st * 200.0) - 0.5);

    float controlledtime = u_time / u_slowdown;


    // CREATIVE SECTION //

    // unused
    // vec3 greenpinkart = greenpinkpsy(pos, u_time);
    // vec3 final = mix(greenpinkart, beautifulsea, alpha);




    vec3 selected_pattern;

    if (u_pattern_a) {
        float cell_art = cell(st, u_resolution, controlledtime, u_size, u_cell_m_dist);
        // we need to fix this duotone gradient blending
        vec3 bicolorcell = mix(
            u_primary_color,
            u_secondary_color, 
            clamp( // only use values betwenn 0.0 and 1.0 to avoid moving away from palette colors
                //cell_art - ( u_gradient_direction * (normalizedX)  * u_gradient_amp + u_gradient_base), 
                cell_art - u_color_balance/2.0,
                0.0, 
                1.0
            ) 
        );
        selected_pattern = bicolorcell;
    }

    if (u_pattern_b) {
        // this u_duotone_base should be a general -> u_color_balance
        vec3 organic = vec3(organic_noise(st, controlledtime, u_size));
        vec3 bicolororganic = mix(u_primary_color, u_secondary_color, clamp(length(organic) - u_color_balance, 0.0, 1.0));

        selected_pattern = bicolororganic;
    }

    if (u_pattern_c) {
        vec3 beautifulsea = addnoiselayer(nayra_verdeclaro, pixelsea(st, controlledtime,  u_size), u_noise_amount, u_noise_mix_amount);
        vec3 bicolorsea = mix(u_primary_color, u_secondary_color, clamp(length( pixelsea(st, controlledtime, u_size)) - u_color_balance, 0.0, 1.0));
        selected_pattern = bicolorsea;
    }

    vec3 gradiented = mix(selected_pattern, u_primary_color, clamp((u_gradient_direction * (normalizedX)  * u_gradient_amp + u_gradient_base), 0.0, 1.0));

    vec3 final = addnoiselayer(gradiented, noiselayer, u_noise_amount, u_noise_mix_amount);

    // do not touch alpha in here. if wanting to modify "alpha" of layers, use mix function before this. 
    gl_FragColor = vec4(final, 1.0);
}