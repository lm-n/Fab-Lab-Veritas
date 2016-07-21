// A HTML range slider
var slider;
var gente = "¿Cuántas personas hay en el espacio?";

function setup() {
  createCanvas(720, 400);
  genteEnElEspacio();
  // hue, saturation, and brightness
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);
}

function draw() {
  background(127);
  strokeWeight(2);

  // Set the hue according to the slider
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(360, 200, 200, 200);
  textSize(32);
  textAlign(CENTER);
  text(gente, 360, 40);
  fill(0, 102, 153);
}

function genteEnElEspacio(){

  setTimeout(function () {
    $.getJSON('http://api.open-notify.org/astros.json', function(data) {
      console.log(data['number']);
      gente = data['number'];
    });
  }, 5000);
}