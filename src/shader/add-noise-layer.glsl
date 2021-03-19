vec3 addnoiselayer (vec3 layer, vec3 noise) {
    // PARAMETERS //
    float noiseamount = 0.65; // between 0.0 and 0.80
    float mixamount = 0.2;

    vec3 noisescreen = mix(noise, layer, length(normalize(noise))+ noiseamount);

    vec3 final = mix(layer, noisescreen, mixamount);
    return final;
}

#pragma glslify: export(addnoiselayer);
