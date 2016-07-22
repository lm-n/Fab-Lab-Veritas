var r = 123;
var g;
var b;
var lect = 700;
var gente = 'esperando...';
var lil = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //llamar la funcion
  getLatest();
  g = random(255);
  b = random(255);
}

function draw() {
  background(r, g, b);
  
  fill(0, 102, 153);
  textSize(32);
  textAlign(CENTER);
  textFont("Helvetica");

  text(gente, windowWidth/2, 300);

}

function getLatest(){
  dweetio.get_latest_dweet_for('NOMBRE_DEL_FEED', function(err, dweet){
    var dweet = dweet[0];
    lect = dweet.content.A0;
    console.log(dweet.thing);
    console.log(dweet.content.A0);
    console.log(dweet.created);

  });
  
  if (lil > 400 && lect < 400){
    gente = 'Hay alguien sentado.';
    console.log ('cambio de texto, timers inician');

  }else if(lil > 400 && lect > 400){
    gente = 'No hay nadie sentadx.';
  }

  lil = lect;
  r = map(lect, 0, 1023, 0, 255);

  esperarLectura();
}

function esperarLectura(){
  setTimeout(function () { //primero un tiempo de espera
    getLatest();
  }, 3000);
}