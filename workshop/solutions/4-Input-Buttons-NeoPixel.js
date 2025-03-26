// Initialisierung des Neopixel LED-Streifens im
// RGB-Modus mit 5 LEDs
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    if (input.buttonIsPressed(Button.AB)) {
        // mittlere LED
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    } else if (input.buttonIsPressed(Button.A)) {
        // rechte LED
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (input.buttonIsPressed(Button.B)) {
        // linke LED
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    }
    // Zeige die Veränderungen auf dem LED-Streifen an
    strip.show()
})
