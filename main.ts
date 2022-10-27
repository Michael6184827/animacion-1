input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sword)
    basic.showIcon(IconNames.QuarterNote)
    basic.showIcon(IconNames.EigthNote)
    basic.showIcon(IconNames.QuarterNote)
    basic.showIcon(IconNames.Sword)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B C5 G B C5 G C5 E ", 149)
})
basic.showString("Hello!")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
