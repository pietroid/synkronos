#ifdef GL_ES
precision highp float;
#endif

uniform vec2 canvasSize;
uniform float time;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;

void main (void) {
    vec2 uv = gl_FragCoord.xy/canvasSize;

    vec3 left = uv.y * color1 + (1.0 -uv.y) * color2;
    vec3 right = uv.y * color3 + (1.0-uv.y) * color4;
    
    //Horizontal Interpolation
    vec3 horiz = uv.x * right + (1.0-uv.x) * left;

	gl_FragColor=vec4(horiz, 1);
}