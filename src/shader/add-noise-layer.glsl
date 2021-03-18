vec3 addnoiselayer (vec3 layer, float rnd) {
    vec3 noisescreen = mix(layer, vec3(rnd), rnd);
    vec3 final = mix(layer, noisescreen, 0.2);
    return final;
}

#pragma glslify: export(addnoiselayer);
