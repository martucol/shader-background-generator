#pragma glslify: noise3d = require('glsl-noise/simplex/3d');

vec3 greenpinkpsy (vec2 pos, float time) {
    float n = noise3d(vec3(pos.x, pos.y, time*0.3));
    return vec3(n+0.2, cos(n), n*5.0);
}

#pragma glslify: export(greenpinkpsy);
