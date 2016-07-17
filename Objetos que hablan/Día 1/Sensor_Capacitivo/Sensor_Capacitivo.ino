/*
 Basado en el 'CapitiveSense Library Demo Sketch' por Paul Badger. 
 Adaptado y traducido por Luis Morales-Navarro
 
 * Utilizar una resistencia alta de 10M entre el pin de envío y de recibido
 * La resisencia afecta la sensibilidad del sensor. 
 * Se puede experimentar con resistencias de 50K - 50M. 
 * Los valores del sensor serán mayores si el valor de la resistencia aumenta
 * El pin de recibido es el pin del sensor - se pueden probar distintas cantidades de metales/aluminio en este pin.
 */

#include <CapacitiveSensor.h> //incluye la biblioteca 
CapacitiveSensor   cs_4_2 = CapacitiveSensor(4,2);     // una resistencia de 10M entre los pines 4 & 2, 
//pin 2 es el pin del sensor, añada aluminio o un cable si se desea.

void setup()                    
{
   cs_4_2.set_CS_AutocaL_Millis(0xFFFFFFFF);     // para autocalibrar 
   Serial.begin(9600);
}

void loop()                    
{
    long start = millis();
    long total1 =  cs_4_2.capacitiveSensor(30);

    Serial.print(millis() - start);        // revisa el comportamiento en milisegundos
    Serial.print("\t");                    // da un espacio

    Serial.print(total1);                  // escribe el valor del sensor
    Serial.print("\t");


    delay(10);                             // para limitar los datos recibidos en el puerto serial
}
