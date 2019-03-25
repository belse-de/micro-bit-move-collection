let strip: neopixel.Strip = null
let left_detector = 0
let right_detector = 0
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    right_detector = pins.digitalReadPin(DigitalPin.P15)
    left_detector = pins.digitalReadPin(DigitalPin.P16)
    if (right_detector == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
    strip.show()
})

