basic.pause(2500)
basic.forever(function () {
    if (SuperBitV2_Digital.PIR(SuperBitV2_Digital.mwDigitalNum.P1P2, SuperBitV2_Digital.enPIR.OPIR)) {
        basic.showNumber(1)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(500)
    } else {
        basic.showNumber(0)
    }
})
basic.forever(function () {
    if (SuperBitV2_Digital.PIR(SuperBitV2_Digital.mwDigitalNum.P1P2, SuperBitV2_Digital.enPIR.OPIR)) {
        basic.showNumber(1)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(500)
    } else {
        basic.showNumber(0)
    }
})
