vec3 blend_lighten (vec3 layer1, vec3 layer2, float mixamount) {

    // lighten blend mode
    vec3 blend = vec3(max(layer1.r,layer2.r), max(layer1.g,layer2.g), max(layer1.b,layer2.b));    
    return blend;
}

#pragma glslify: export(blend_lighten);
