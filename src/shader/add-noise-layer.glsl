#pragma glslify: blend_darken = require("./blend_darken.glsl");
#pragma glslify: blend_lighten = require("./blend_lighten.glsl");


vec3 addnoiselayer (vec3 layer, vec3 noise, float u_noise_amp, float u_noise_mix_amount) {
    // PARAMETERS //
    float noiseamount = u_noise_amp; // not used for now
    float mixamount = u_noise_mix_amount; // defines noise "transparency"

    vec3 lightened = blend_lighten(noise, layer);
    vec3 noisescreenlightened = mix(layer, lightened, 1.0);

    vec3 final = mix(layer, noisescreenlightened, u_noise_mix_amount);
    return final;
}

#pragma glslify: export(addnoiselayer);
