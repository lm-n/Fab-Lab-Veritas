/*
 Del Arduino Starter Kit
 Proyecto 2  - Spaceship Interface
 Creado el 13 de setiembre de 2012 por Scott Fitzgerald
 http://www.arduino.cc/starterKit
 Este ejemplo es parte del dominio público


 Partes requeridas:
 1 LED verde
 2 LEDs rojos
 1 botón 
 10 kilohm resistor
 3 220 ohm resistors

*/ 

// Crear una variable global para guardar el estado del switch
// La variable es persistente através del programa.
// Cuando se referiere a la variable switchEstado se habla sobre el número del switch
int switchEstado = 0;

void setup() {
  // Se declaran los LEDs como salidas
  pinMode(3, OUTPUT); //OUTPUT significa salida
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);

  // Se declara el pin del switch como una entrada
  pinMode(2, INPUT); // INPUT signifida entrada
}

void loop() {

  // leer el valor del switch
  // digitalRead() revisa si hay voltaje en el pin o no
  switchEstado = digitalRead(2);

  // Condicional: si el botón no está presionado
  // encender el LED verde y apagar el LED rojo
  if (switchEstado == LOW) {
    digitalWrite(3, HIGH); // encender el LED verde en el pin 3
    digitalWrite(4, LOW);  // apagar el LED rojo en el pin 4
    digitalWrite(5, LOW);  // apagar el LED rojo en pin 5 
  }
  // esto es parte de la condicional del programa, parte del if() statement.
  // si el switch no es LOW (el botón está apretado)
  // apagar el LED verde y parpader los LEDs rojos alternativamente 
  else {
    digitalWrite(3, LOW);  // apagar el  LED verde en el pin 3
    digitalWrite(4, LOW);  // apagar el LED rojo en el pin 4
    digitalWrite(5, HIGH); // encender el LED rojo en el pin 5
    // esperar por un cuarto de segundo antes de cambiar la luz
    delay(250);
    digitalWrite(4, HIGH); // encender el LED rojo en el pin 4
    digitalWrite(5, LOW);  // apagar el LED rojo en el pin 5
    // esperar por un cuarto de segundo antes de cambiar la luz
    delay(250);
  }
}

