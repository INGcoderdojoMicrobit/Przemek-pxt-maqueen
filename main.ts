function right () {
    horizon()
    OLED12864_I2C.vline(
    43,
    14,
    14,
    1
    )
    OLED12864_I2C.vline(
    44,
    15,
    12,
    1
    )
    OLED12864_I2C.vline(
    45,
    16,
    10,
    1
    )
    OLED12864_I2C.vline(
    46,
    17,
    8,
    1
    )
    OLED12864_I2C.vline(
    47,
    18,
    6,
    1
    )
    OLED12864_I2C.vline(
    48,
    19,
    4,
    1
    )
    OLED12864_I2C.vline(
    49,
    20,
    2,
    1
    )
}
function left () {
    horizon()
    OLED12864_I2C.vline(
    20,
    14,
    14,
    1
    )
    OLED12864_I2C.vline(
    19,
    15,
    12,
    1
    )
    OLED12864_I2C.vline(
    18,
    16,
    10,
    1
    )
    OLED12864_I2C.vline(
    17,
    17,
    8,
    1
    )
    OLED12864_I2C.vline(
    16,
    18,
    6,
    1
    )
    OLED12864_I2C.vline(
    15,
    19,
    4,
    1
    )
    OLED12864_I2C.vline(
    14,
    20,
    2,
    1
    )
}
function horizon () {
    OLED12864_I2C.hline(
    20,
    20,
    25,
    1
    )
    OLED12864_I2C.hline(
    20,
    21,
    25,
    1
    )
    OLED12864_I2C.hline(
    20,
    22,
    25,
    1
    )
    OLED12864_I2C.hline(
    20,
    23,
    25,
    1
    )
    OLED12864_I2C.hline(
    20,
    18,
    25,
    1
    )
    OLED12864_I2C.hline(
    20,
    19,
    25,
    1
    )
}
maqueen.IR_callbackUser(function (message) {
    if (message == 5) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Fwd: " + speed,
        1
        )
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        doprzodu = 1
    }
    if (message == 13) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Back: " + speed,
        1
        )
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 8) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Speed: " + speed,
        1
        )
        right()
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 10) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Speed: " + speed,
        1
        )
        left()
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 9) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Stop!",
        1
        )
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 21) {
        speed = speed - 10
        if (speed < 50) {
            speed = 50
        }
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Speed: " + speed,
        1
        )
    }
    if (message == 22) {
        maqueen.motorStop(maqueen.Motors.All)
        speed = speed + 10
        if (speed > 255) {
            speed = 255
        }
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Speed: " + speed,
        1
        )
    }
    if (message == 17) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Bip!",
        1
        )
        music.playTone(262, 200)
    }
    if (message == 12) {
        strip.rotate(0)
        strip.show()
    }
    if (message == 14) {
        strip.setBrightness(255)
        // white
        strip.setPixelColor(0, NeoPixelColors.Yellow)
        // red
        strip.setPixelColor(1, NeoPixelColors.Red)
        // green
        strip.setPixelColor(2, NeoPixelColors.Green)
        // blue
        strip.setPixelColor(3, NeoPixelColors.Blue)
        strip.show()
    }
    if (message == 18) {
        strip.setBrightness(10)
        // white
        strip.setPixelColor(0, NeoPixelColors.Yellow)
        // red
        strip.setPixelColor(1, NeoPixelColors.Red)
        // green
        strip.setPixelColor(2, NeoPixelColors.Green)
        // blue
        strip.setPixelColor(3, NeoPixelColors.Blue)
        strip.show()
    }
    if (message == 0) {
        if (powerON == 1) {
            strip.clear()
            strip.show()
            powerON = 0
        } else {
            // white
            strip.setPixelColor(0, NeoPixelColors.Yellow)
            // red
            strip.setPixelColor(1, NeoPixelColors.Red)
            // green
            strip.setPixelColor(2, NeoPixelColors.Green)
            // blue
            strip.setPixelColor(3, NeoPixelColors.Blue)
            strip.show()
            powerON = 1
        }
    }
    if (message == 2) {
        if (playON == 1) {
            playON = 0
        } else {
            playON = 1
        }
    }
})
let dist = 0
let playON = 0
let doprzodu = 0
let powerON = 0
let strip: neopixel.Strip = null
let speed = 0
let diff = 10
OLED12864_I2C.init(60)
speed = 250
OLED12864_I2C.showString(
1,
0,
"Maqueen!",
1
)
basic.pause(100)
OLED12864_I2C.showString(
1,
1,
"czesc !",
1
)
basic.pause(100)
OLED12864_I2C.showString(
1,
2,
"Przemek",
1
)
basic.pause(2000)
OLED12864_I2C.showString(
1,
1,
"czekam na",
1
)
OLED12864_I2C.showString(
1,
2,
"rozkazy",
1
)
// Create a NeoPixel driver - specify the pin, number of LEDs, and the type of
// the NeoPixel srip, either standard RGB (with GRB or RGB format) or RGB+White.
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
powerON = 255
basic.forever(function () {
    dist = Math.floor(maqueen.Ultrasonic(PingUnit.Centimeters))
    if (dist != 0 && dist < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "Obstacle!",
        1
        )
        OLED12864_I2C.showString(
        1,
        2,
        "D: " + dist,
        1
        )
    }
    if (playON == 1) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        0,
        "DEMO",
        1
        )
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        strip.setBrightness(10)
        // white
        strip.setPixelColor(0, NeoPixelColors.Yellow)
        // red
        strip.setPixelColor(1, NeoPixelColors.Red)
        // green
        strip.setPixelColor(2, NeoPixelColors.Green)
        // blue
        strip.setPixelColor(3, NeoPixelColors.Blue)
        strip.show()
        for (let index = 0; index <= 19; index++) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(1000)
            strip.rotate(0)
            strip.show()
            OLED12864_I2C.showString(
            1,
            2,
            "count:" + index,
            1
            )
        }
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        strip.clear()
        strip.show()
    }
    basic.pause(100)
    if (doprzodu == 1) {
        speed = speed + diff
        if (speed > 255) {
            diff = -10
        }
        if (speed < 0) {
            doprzodu = 0
            maqueen.motorStop(maqueen.Motors.All)
        }
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    }
})
