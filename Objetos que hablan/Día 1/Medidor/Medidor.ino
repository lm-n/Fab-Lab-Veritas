/*
Basado en el Ejemplo Love-O-Meter del Arduino Starter Kit  
Creado por Scott Fitzgerald el 13 Septiembre 2012
http://www.arduino.cc/starterKit
Adaptado y traducido por Luis Morales-Navarro

 Partes requeridas:
 1 fotocelda
 3 LEDs rojos
 3 220 ohm resistors

Este código es parte del dominio público. 
*/

// nombrar la constante para el pin en el que el sensor está conectado
const int pinSensor = A0;

void setup() {
  // abrir una conexión serial para ver los valores del sensor
  Serial.begin(9600);
  // hacer que los pines de los LEDs sean salidas
  // este for() loop nos salva tiempo al escribir el código haciendo que las operaciones se repitan
  for (int numeroPin = 2; numeroPin < 5; numeroPin++) {
    pinMode(numeroPin, OUTPUT);
    digitalWrite(numeroPin, LOW);
  }
}

void loop() {
  // leer los valores del sensor 
  // y guardarlos como una variable
  int sensorVal = analogRead(pinSensor);

  // enviar el valor de 10-bit del sensor através del puerto serial
  Serial.print("Valor del Sensor: ");
  Serial.print(sensorVal);


  // si el valor del sensor es menor que 100
  // apagar todos los LEDs
  if (sensorVal < 100) {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  } // si el valor del sensor está entre 100 y 250 encender un LED
  else if (sensorVal >= 100 && sensorVal < 250) {
    digitalWrite(2, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  } // si el valor del sensor está entre 250 y 750 encender dos LEDs
  else if (sensorVal >= 250 && sensorVal < 750) {
    digitalWrite(2, HIGH);
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
  } // si el valor del sensor es superior a 750 encender todos los LED
  else if (sensorVal >= 750) {
    digitalWrite(2, HIGH);
    digitalWrite(3, HIGH);
    digitalWrite(4, HIGH);
  }
  delay(1);
}
