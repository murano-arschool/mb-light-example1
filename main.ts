function y計算 (y: number) {
    傾きy = y
    if (y > 90) {
        傾きy = 180 - y
    } else if (y < -90) {
        傾きy = -180 - y
    }
    Blue = pins.map(
    傾きy,
    -90,
    90,
    0,
    255
    )
}
function x計算 (x: number) {
    傾きx = x
    if (x > 90) {
        傾きx = 180 - x
    } else if (x < -90) {
        傾きx = -180 - x
    }
    Green = pins.map(
    傾きx,
    -90,
    90,
    0,
    255
    )
}
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x計算(value)
    } else if (name == "y") {
        y計算(value)
    } else if (name == "r") {
        明るさ = 明るさ + value
        if (明るさ > 100) {
            明るさ = 100
        }
        if (明るさ < 5) {
            明るさ = 5
        }
        strip.setBrightness(明るさ)
    } else {
    	
    }
})
let Green = 0
let 傾きx = 0
let Blue = 0
let 傾きy = 0
let 明るさ = 0
let strip: neopixel.Strip = null
radio.setGroup(7)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.clear()
strip.show()
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
明るさ = 30
strip.setBrightness(明るさ)
basic.forever(function () {
    strip.showColor(neopixel.rgb(30, Green, Blue))
    basic.pause(100)
})
