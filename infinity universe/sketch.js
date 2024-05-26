
// this variable will hold our shader object
let theShader;
let t_mult = 1;
let t =0;

function preload(){
  // load the shader
  theShader = loadShader('texture.vert', 'texture.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  t = t_mult * millis() / 1000.0;
  t_mult += 1/t
  theShader.setUniform("canvasSize", [windowWidth, windowHeight]);
  theShader.setUniform("time", t);
  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0,0,windowWidth, windowHeight);
}