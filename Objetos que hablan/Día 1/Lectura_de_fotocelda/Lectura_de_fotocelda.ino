

// el setup inicia cuando se resetea el arduino
void setup() {
  // iniciar comunicación serial a 9600 bits por segundo:
  Serial.begin(9600);
}
void loop() {
  // leer el valor del pin análogo 0:
  int sensorValue = analogRead(A0);
  // escribir el valor leído:
  Serial.println(sensorValue);
  delay(1);        // esperar para obtener estabilidad
}
