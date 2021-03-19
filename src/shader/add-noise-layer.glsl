vec3 addnoiselayer (vec3 layer, vec3 noise) {
    // PARAMETERS //
    float noiseamount = 0.5; // between 0.0 and 0.80
    float mixamount = 0.0105; // 0.01 for super subtle effect

    vec3 noisescreen = mix(layer, noise, length(normalize(noise))+ noiseamount);

    vec3 final = mix(layer, noisescreen, mixamount);
    return final;
}

#pragma glslify: export(addnoiselayer);
