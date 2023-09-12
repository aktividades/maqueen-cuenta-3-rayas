input.onButtonPressed(Button.A, function () {
    start = true
    basic.showIcon(IconNames.Sword)
})
let start = false
start = false
let contador = 0
let antes = "blanco"
let final = false
while (start == false) {
    basic.showNumber(0)
}
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
while (final == false) {
    // 0=negro
    // 1=blanco
    if (antes == "blanco" && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        antes = "negro"
        contador += 1
    }
    if (antes == "negro" && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        antes = "blanco"
    }
    if (contador == 3) {
        final = true
    }
}
maqueen.motorStop(maqueen.Motors.All)
basic.showNumber(contador)
