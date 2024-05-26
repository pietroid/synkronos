var blots = [];
var total_energy = 0;
var energy_rate =0;
var theShader;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	background(0);

    theShader = createShader(vert,frag);
}

function draw() {
    shader(theShader);
}