// nombre de variable para deslizador 
var slider;

function setup() {
  createCanvas(720, 400);
  // matiz, saturacion, y brillo
  colorMode(HSB, 255);
  // deslizador con rango entre 0 y 255 con un punto de inicio de 127
  slider = createSlider(0, 255, 127);
}

function draw() {
  background(127);
  strokeWeight(2);

  // crear el color dependiendo del deslizador
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(360, 200, 200, 200);
}