
// this variable will hold our shader object
let theShader;

let baseColor;

let color1;
let color2;
let color3;
let color4;

let v1;
let v2;
let v3;
let v4;

let period1;
let period2;
let period3;
let period4;

let k = 0.001;
let f = 0.05;

let t = 0;

function preload(){
  // load the shader
  theShader = loadShader('texture.vert', 'texture.frag');
}

function fromHexToVector(hexString){
  let hex = parseInt(hexString, 16);
  let r = hex >> 16 & 255;
  let g = hex >> 8 & 255;
  let b = hex & 255;
  return createVector(r/255, g/255, b/255);
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  baseColor = fromHexToVector("061F3A");

  color1 = createVector(baseColor.x, baseColor.y, baseColor.z);
  color2 = createVector(baseColor.x, baseColor.y, baseColor.z);
  color3 = createVector(baseColor.x, baseColor.y, baseColor.z);
  color4 = createVector(baseColor.x, baseColor.y, baseColor.z);

  v1 = createVector(0,0,0);
  v2 = createVector(0,0,0);
  v3 = createVector(0,0,0);
  v4 = createVector(0,0,0);
}

function draw() {
  t += 1;
  color1.add(v1);
  color2.add(v2);
  color3.add(v3);
  color4.add(v4);

  v1.add(p5.Vector.sub(baseColor, color1).mult(k));
  v2.add(p5.Vector.sub(baseColor, color2).mult(k));
  v3.add(p5.Vector.sub(baseColor, color3).mult(k));
  v4.add(p5.Vector.sub(baseColor, color4).mult(k));

  v1.mult(0.99);
  v2.mult(0.99);
  v3.mult(0.99);
  v4.mult(0.99);

  let period = 100;

  
  if (t % period == 0){
    v1.add(p5.Vector.random3D().mult(f));
    v2.add(p5.Vector.random3D().mult(f));
    v3.add(p5.Vector.random3D().mult(f));
    v4.add(p5.Vector.random3D().mult(f));
  }


  theShader.setUniform("canvasSize", [windowWidth, windowHeight]);
  theShader.setUniform("color1",[color1.x, color1.y, color1.z]);
  theShader.setUniform("color2", [color1.x, color1.y, color1.z]);
  theShader.setUniform("color3", [color3.x , color3.y, color3.z]);
  theShader.setUniform("color4", [color4.x , color4.y, color4.z]);

  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0,0,windowWidth, windowHeight);
}