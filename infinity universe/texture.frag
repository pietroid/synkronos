#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 canvasSize;
uniform float time;

void main (void) {
    vec3 c;
	float t = time;
    float l;

    //position things
    vec2 uv,p=gl_FragCoord.xy/canvasSize;
    uv=p;
    p-=.5;
    p.x*=canvasSize.x/canvasSize.y;
    l=length(p);
    
	//r
    uv=p*0.5*t;
    c[0]=.01/length(mod(uv,1.)-.5);
	
    //g
    uv=p*0.5*(t+0.5);
    c[1]=.01/length(mod(uv,1.)-.5);

    //b
    uv=p*0.5*(t+1.0);
    c[2]=.01/length(mod(uv,1.)-.5);

	gl_FragColor=vec4(c/l,1);
}