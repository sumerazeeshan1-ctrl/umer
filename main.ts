input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # . # .
        . # . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # . . #
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # . . #
        # # . # #
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # . . #
        # # # # #
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # . . #
        # # # # #
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # . . #
        # # # # #
        # # . . .
        # # . . .
        `)
    basic.showString("12345678910")
})
basic.forever(function () {
	
})
