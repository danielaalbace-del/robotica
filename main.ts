basic.showString("BIENVENIDO")     // Muestra el texto en la pantalla
basic.showIcon(IconNames.Happy)    // Muestra una carita feliz

serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let comando = serial.readLine()
    basic.showString(comando)           // Muestra en pantalla el comando recibido
    serial.writeLine("Recibido: " + comando) // Responde en la consola

    if (comando == "ADELANTE") {
        pins.servoWritePin(AnalogPin.P0, 0)   // Rueda izquierda
        pins.servoWritePin(AnalogPin.P1, 180) // Rueda derecha
    } else if (comando == "ATRAS") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
    } else if (comando == "IZQ") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 180)
    } else if (comando == "DER") {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (comando == "STOP") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (comando == "SUBIR") {
        pins.servoWritePin(AnalogPin.P2, 0)   // Horquilla arriba
    } else if (comando == "BAJAR") {
        pins.servoWritePin(AnalogPin.P2, 180) // Horquilla abajo
    } else if (comando == "NEUTRAL") {
        pins.servoWritePin(AnalogPin.P2, 90)  // Horquilla al medio
    }
})
