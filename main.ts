input.onButtonPressed(Button.A, function () {
    basic.showString("MOM love")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1e+36; index++) {
        basic.showString("DED IOVE")
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("B A G A B B B - ", 120), music.PlaybackMode.UntilDone)
})
