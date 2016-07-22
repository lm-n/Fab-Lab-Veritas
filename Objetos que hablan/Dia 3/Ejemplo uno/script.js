var r = 123;
var g;
var b;
var lect;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //llamar la funcion
  getLatest();
  g = random(255);
  b = random(255);
}

function draw() {
  background(r, g, b);


}

function getLatest(){
  dweetio.get_latest_dweet_for("NOMBRE_DEL_FEED", function(err, dweet){

    var dweet = dweet[0]; 
    lect = dweet.content.A0;
    console.log(dweet.thing); // El nombre del feed
    console.log(dweet.content.A0); // El contenido de la lectura
    console.log(dweet.created); // La hora de la lectura

  });

  r = map(lect, 0, 1023, 0, 255);

  esperar();
}

function esperar(){
  setTimeout(function () { //primero un tiempo de espera
    getLatest();
  }, 3000);
}