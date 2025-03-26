// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    // rechte LED
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    // linke LED
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
    basic.pause(200)
    strip.clear()
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
    basic.pause(200)
})
