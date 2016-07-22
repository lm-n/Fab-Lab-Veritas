var r = 123;
var g;
var b;
var lect = 700;
var cinco;
var diez;
var quince;
var gente = 'esperando...';
var lil = 600;
var mySound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //llamar la funcion
  getLatest();
  mySound = loadSound('assets/alarma.mp3'); //cargar sonido
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
    gente = 'Has estado sentadx por menos de 5 minutos.';
    console.log ('cambio de texto, timers inician');
    contarTiempo5();
    contarTiempo10();
    contarTiempo15();
  }else if(lil > 400 && lect > 400){
    gente = 'No hay nadie sentadx.';
  }else if(lil < 400 && lect > 400){
    clearTimeout(cinco);
    clearTimeout(diez);
    clearTimeout(quince);
    mySound.stop();
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

function contarTiempo5(){
    cinco = setTimeout(function(){
    gente = 'Has estado sentadx por más de 5 minutos.';
    mySound.setVolume(0.4); //sonar 
    mySound.play();
    }, 300000);
}

function contarTiempo10(){
    diez = setTimeout(function(){
    gente = 'Has estado sentadx por más de 10 minutos.';
    mySound.setVolume(0.7);
    mySound.play();
    }, 600000);
}

function contarTiempo15(){
    quince = setTimeout(function(){
    gente = 'Has estado sentadx por más de 20 minutos.';
    mySound.setVolume(1.0);
    mySound.play();
    }, 900000);
}