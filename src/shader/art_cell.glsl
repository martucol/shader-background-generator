
vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

float cell (vec2 st, vec2 resolution, float time) {
    // PARAMETERS //
    float size = 6.0;  // between 1.0 and 50.0
    float m_dist = 1.0;  // minimum distance between 1.0 and 0.1 (0.1 being just points)
    float intensity = 1.0; // regulates the overall intensity of the cell. if distance is too low, intensity should be up



    // cellular noise
    //st.x *= u_resolution.x/u_resolution.y; 
    st *= size;

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float cell = 0.0;
    
    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            // Neighbor place in the grid
            vec2 neighbor = vec2(float(x),float(y));

            // Random position from current + neighbor place in the grid
            vec2 point = random2(i_st + neighbor);

			// Animate the point
            point = 0.5 + 0.5*sin(time + 6.2831*point);

			// Vector between the pixel and the point
            vec2 diff = neighbor + point - f_st;

            // Distance to the point
            float dist = length(diff);

            // Keep the closer distance
            m_dist = min(m_dist, dist);
        }
    }

    cell += m_dist * intensity; // Draw the min distance (distance field)
    return cell;
}

#pragma glslify: export(cell);
