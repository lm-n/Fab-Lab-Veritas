/*
 Basado en 'Controlar la posición de un servo usando un potenciómetro (una resistencia variable)'
 creado Michal Rinott <http://people.interaction-ivrea.it/m.rinott>
 modificado el 8 Nov 2013 por Scott Fitzgerald http://www.arduino.cc/en/Tutorial/Knob

 Adaptado y traducido por Luis Morales-Navarro
*/

#include <Servo.h> //incluir la biblioteca de los servos

Servo miServo;  // crear un objeto de servo para controlar el servo

int sensorLuz = 0;  // pin análogo usado para conectar el sensor de luz (fotocelda)
int val;    // variable para leer el valor del pin 

void setup() {
  miServo.attach(9);  // adjunta el servo en el pin 9 al objeto de servo
}

void loop() {
  val = analogRead(sensorLuz);   // lee el valor del sensor de luz (valor entre 0 y 1023)
  val = map(val, 0, 1023, 0, 180);     // escala el valor del sensor para usarlos en el servo (valor entre 0 y 180)
  miServo.write(val);                  // posiciona al servo de acuerdo al valor anterior
  delay(15);                           // espera a que el servo llegue a la posición
}

