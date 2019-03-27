let strip: neopixel.Strip = null
let right_detector = 0
// Initialisierung des rechten Liniensensors
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
// Initialisierung des linken Liniensensors
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    // Speichert den momentanen Wert des Liniensensors in
    // der Variable: "right_detector"
    //
    // Ließt den momentanen Wert des rechten Liniensensors
    // ein
    right_detector = pins.digitalReadPin(DigitalPin.P15)
    // Wenn der rechte Liniensensor Weiß sieht schalte die
    // rechte LED auf Rot
    //
    // ansonsten schalte sie auf schwarz(aus)
    if (right_detector == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
