// crear variable del deslizador
var slider;
//crear variable de gente en el espacio
var gente = "¿Cuántas personas hay en el espacio?";

function setup() {
  createCanvas(720, 400);
  //llamar la funcion
  genteEnElEspacio();
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);
}

function draw() {
  background(127);
  strokeWeight(2);

  // color dependiente del deslizador
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(360, 200, 200, 200);
  textSize(32);
  textAlign(CENTER);
  text(gente, 360, 40);
  fill(0, 102, 153);
}

function genteEnElEspacio(){
//funcion que consulta a otra aplicacion 
  setTimeout(function () { //primero un tiempo de espera
    $.getJSON('http://api.open-notify.org/astros.json', function(data) {
      console.log(data['number']);
      gente = data['number'];
    });
  }, 5000);
}