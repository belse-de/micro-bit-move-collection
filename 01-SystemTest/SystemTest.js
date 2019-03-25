let right_detector = 0
let image_none: Image = null
let image_all: Image = null
let left_detector = 0
let strip: neopixel.Strip = null
function servos_test2() {
    kitronik_servo_lite.stop()
    basic.pause(500)
    kitronik_servo_lite.forward()
    basic.pause(500)
    kitronik_servo_lite.backward()
    basic.pause(500)
    kitronik_servo_lite.stop()
}
function display_test2() {
    image_all.showImage(0)
    basic.pause(500)
    image_none.showImage(0)
}
function strip_test2() {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
image_all = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
image_none = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
servos_test2()
display_test2()
strip_test2()
basic.pause(100)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    left_detector = pins.digitalReadPin(DigitalPin.P15)
    if (left_detector == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
    right_detector = pins.digitalReadPin(DigitalPin.P16)
    if (right_detector == 1) {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    }
    strip.show()
})

