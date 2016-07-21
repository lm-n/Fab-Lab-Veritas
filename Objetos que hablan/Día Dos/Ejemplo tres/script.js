var r, g, b; // variables para los colores rojo, verde, y azul

function setup() {
  createCanvas(windowWidth, windowHeight); //crear canvas
  // escoger colores aleatorios
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  //definir el color del fondo
  background(127);
  // dibujar circulo
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  //x, y, ancho, alto
  ellipse(360, 200, 200, 200);
}

// cuando el usuario le da click
function mousePressed() {
  // revisar si el mouse esta dentro del circulo
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    //escoger colores random
    r = random(255);
    g = random(255);
    b = random(255);
  }
}