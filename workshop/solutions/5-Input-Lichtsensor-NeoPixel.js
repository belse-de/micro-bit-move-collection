let l_sensor = 0
let r_sensor = 0
// Initialisierung des rechten Liniensensors
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
// Initialisierung des linken Liniensensors
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "r_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    r_sensor = pins.digitalReadPin(DigitalPin.P15)
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "l_sensor"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    l_sensor = pins.digitalReadPin(DigitalPin.P16)
    if (l_sensor == 1 && r_sensor == 1) {
        // mittlere LED
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    } else if (l_sensor == 0 && r_sensor == 1) {
        // rechte LED
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (l_sensor == 1 && r_sensor == 0) {
        // linke LED
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    } else {

    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
