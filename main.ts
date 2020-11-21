radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        KSB037.stop()
        basic.showIcon(IconNames.No)
    }
    // 大前進
    if (receivedNumber == 1) {
        KSB037.foreward(1000)
        basic.showArrow(ArrowNames.North)
    }
    // 小前進
    if (receivedNumber == 2) {
        KSB037.foreward(500)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . # . .
            . . # . .
            `)
    }
    // 小後退
    if (receivedNumber == 3) {
        KSB037.backward(500)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    // 大後退
    if (receivedNumber == 4) {
        KSB037.backward(1000)
        basic.showArrow(ArrowNames.South)
    }
    // 大左轉
    if (receivedNumber == 5) {
        KSB037.rightMotor_foreward(200)
        KSB037.leftMotor_foreward(1000)
        basic.showArrow(ArrowNames.East)
    }
    // 小左轉
    if (receivedNumber == 6) {
        KSB037.rightMotor_foreward(100)
        KSB037.leftMotor_foreward(500)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # . . #
            . . . # .
            . . # . .
            `)
    }
    // 大右轉
    if (receivedNumber == 7) {
        KSB037.rightMotor_foreward(1000)
        KSB037.leftMotor_foreward(200)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . # #
            . # . . .
            . . # . .
            `)
    }
    // 小右轉
    if (receivedNumber == 8) {
        KSB037.rightMotor_foreward(500)
        KSB037.leftMotor_foreward(100)
        basic.showArrow(ArrowNames.West)
    }
    // C:關爪
    if (receivedNumber == 9) {
        角度 = 90
        servos.P0.setAngle(角度)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # # # .
            . . # . .
            `)
    }
    // E:全開爪
    if (receivedNumber == 10) {
        角度 = 120
        servos.P0.setAngle(角度)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            . . # . .
            `)
    }
    // D:+5度
    if (receivedNumber == 11) {
        角度 += 5
        servos.P0.setAngle(角度)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    // F:-5度
    if (receivedNumber == 12) {
        角度 += -5
        servos.P0.setAngle(角度)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
let 角度 = 0
radio.setGroup(136)
