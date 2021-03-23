#pragma glslify: blend_darken = require("./blend_darken.glsl");


vec3 addnoiselayer (vec3 layer, vec3 noise, float u_noise_amount, float u_noise_mix_amount) {
    // PARAMETERS //
    float noiseamount = u_noise_amount; // between 0.0 and 0.80
    float mixamount = u_noise_mix_amount; // 0.01 for super subtle effect

    vec3 noisescreen = mix(layer, noise, length(normalize(noise))+ noiseamount);

    vec3 darkened = blend_darken(noise, layer);
    vec3 noisescreendarkened = mix(layer, noise, length(normalize(darkened))+ noiseamount);

    vec3 lightened = blend_darken(noise, layer);
    vec3 noisescreenlightened = mix(layer, noise, length(normalize(lightened))+ noiseamount);

    vec3 final = mix(layer, noisescreenlightened, mixamount);
    return final;
}

#pragma glslify: export(addnoiselayer);
