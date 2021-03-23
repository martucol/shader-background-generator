vec3 blend_darken (vec3 layer1, vec3 layer2) {
    // darken blend mode
    vec3 blend = vec3(min(layer1.r,layer2.r), min(layer1.g,layer2.g), min(layer1.b,layer2.b));    
    return blend;
}

#pragma glslify: export(blend_darken);
