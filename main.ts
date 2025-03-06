input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Skull)
        basic.showString("WARNING")
        basic.clearScreen()
    } else if (input.temperature() < 25) {
        basic.showIcon(IconNames.Happy)
        basic.showString("GOOD")
        basic.clearScreen()
    }
})
basic.showString("GREENHOUSE HEAT TEMPERATURE RECORDER ")
basic.clearScreen()
