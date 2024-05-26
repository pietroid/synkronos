
// this variable will hold our shader object
let theShader;

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
  theShader.setUniform("canvasSize", [windowWidth, windowHeight]);
  theShader.setUniform("time", millis() / 1000.0);
  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0,0,windowWidth, windowHeight);
}