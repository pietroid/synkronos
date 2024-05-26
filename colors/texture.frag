#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 canvasSize;
uniform float time;

void main (void) {
    vec3 c;
	float l,z = time;
    
	for(int i=0;i<3;i++) {
		vec2 uv,p=gl_FragCoord.xy/canvasSize;
		uv=p;
		p-=.5;
		p.x*=canvasSize.x/canvasSize.y;
		z+=.07;
		l=length(p);
		uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
		c[i]=.01/length(mod(uv,1.)-.5);
	}
	gl_FragColor=vec4(c/l,time);
}