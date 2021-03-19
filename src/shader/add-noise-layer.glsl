vec3 addnoiselayer (vec3 layer, vec3 noise) {

    float amount = 0.65; // parameter: between 0.0 and 0.80
    vec3 noisescreen = mix(noise, layer, length(normalize(noise))+ amount);
    vec3 final = mix(layer, noisescreen, 0.2);
    return final;
}

#pragma glslify: export(addnoiselayer);
