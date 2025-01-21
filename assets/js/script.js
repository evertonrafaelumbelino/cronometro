let hora = document.getElementById('hora')
let min = document.getElementById('min')
let seg = document.getElementById('seg')
let horario = document.getElementsByClassName('horario')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const continuar = document.getElementById('continuar')
const reiniciar = document.getElementById('reiniciar')

function iniciarCrono() {
    let segundos = 1
    let minutos = 1
    let horas = 1

    let idseg = setInterval(() => {
        if (segundos <= 59) {
            seg.innerText = segundos++
        } else {
            segundos = 1
            seg.innerText = segundos
        }
    }, 1000)

    let idmin = setInterval(() => {
        if (minutos <= 59) {
            min.innerText = minutos++
        } else {
            minutos = 1
            min.innerText = minutos
        }
    }, 60000)

    let idhora = setInterval(() => {
        if (horas <= 59) {
            hora.innerText = horas++
        } else {
            horas = 1
            hora.innerText = horas
        }
    },  3600000)

    pausar.addEventListener('click', () => {
        clearInterval(idseg)
        clearInterval(idmin)
        clearInterval(idhora)
    })

    continuar.addEventListener('click', () => {
        if (pausar.click) {
            idseg = setInterval(() => {
                if (segundos <= 59) {
                    seg.innerText = segundos++
                } else {
                    segundos = 1
                    seg.innerText = segundos
                }
            }, 1000)
    
            idmin = setInterval(() => {
                if (minutos <= 59) {
                    min.innerText = minutos++
                } else {
                    minutos = 1
                    min.innerText = minutos
                }
            }, 60000)
    
            idhora = setInterval(() => {
                if (horas <= 59) {
                    hora.innerText = horas++
                } else {
                    horas = 1
                    hora.innerText = horas
                }
            },  3600000)
        }
    })

    reiniciar.addEventListener('click', () => {
        segundos = ''
        minutos = ''
        horas = ''
    })
}

