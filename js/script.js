const showNumber = document.querySelector("#showNumber")
const inputUser = document.querySelector("#inputUser")
const confirmNumber = document.querySelector("#confirmNumber")
const reset = document.querySelector("#reset")


let contadorPerdidas = 0;
let contadorMayor10 = 0;
let ayuda = false;

var min = Math.ceil(1);
var max = Math.floor(10);
var maquina = Math.floor(Math.random() * (max - min) + min);

reset.addEventListener("click", function () {
    window.location.reload()
})

console.log(maquina)

confirmNumber.addEventListener("click", function () {
    if (inputUser.value != '') {
        if (inputUser.value <= 10) {
            console.log(contadorPerdidas)
            if (maquina == inputUser.value) {
                if (ayuda == false) {
                    if (contadorPerdidas != 0) {
                        showNumber.innerText = "Acertaste!! :=)"
                    } else {
                        showNumber.innerText = "ACERTASTE A LA PRIMERA!!! :O"
                    }
                } else {
                    showNumber.innerText = "Acertaste!! (con ayuda) :)"
                }
                showNumber.style.color = 'green'
                reset.classList.toggle("show")
                confirmNumber.classList.toggle("reset")
            } else {
                contadorPerdidas++;
                function input0() {
                    inputUser.value = ''
                }
                switch (contadorPerdidas) {
                    case 1:
                        showNumber.innerText = "Intente de vuelta"
                        input0()
                        break;
                    case 2:
                        showNumber.innerText = "Intente con otro más"
                        showNumber.style.color = 'green'
                        input0()
                        break;
                    case 3:
                        showNumber.innerText = "No era el " + inputUser.value
                        showNumber.style.color = 'blue'
                        input0()
                        break;
                    case 4:
                        showNumber.innerText = "Intente de vuelta pero con otro número"
                        showNumber.style.color = 'black'
                        input0()
                        break;
                    case 5:
                        showNumber.innerText = "... :("
                        showNumber.style.color = 'orange'
                        input0()
                        break;
                    case 6:
                        showNumber.innerText = "NOOOO!!"
                        showNumber.style.color = 'red'
                        input0()
                        break;
                    case 7:
                        showNumber.innerText = "????"
                        showNumber.style.color = 'black'
                        input0()
                        break;
                    case 8:
                        if (inputUser.value > maquina) {
                            showNumber.innerText = "El número es menor..."
                        } else {
                            showNumber.innerText = "El número es mayor..."
                        }
                        input0()
                        break;
                    case 9:
                        showNumber.innerText = "Ya me canse de hablarte :["
                        input0()
                        break;
                }
                if (contadorPerdidas >= 10) {
                    showNumber.innerText = "Último número: " + inputUser.value
                    input0()
                    if (contadorPerdidas >= 15) {
                        showNumber.innerText = "Me das pena, el número es " + maquina + " :<"
                        ayuda = true
                        input0()
                    }
                }
            }
        } else {
            contadorMayor10++;
            if (contadorMayor10 < 5) {
                showNumber.innerText = "El número tiene que ser menor a 10!!!"
                showNumber.style.color = 'red'
            } else {
                showNumber.innerText = "Vas a seguir insistiendo?"
                showNumber.style.color = 'gray'
            }
        }
    } else {
        showNumber.innerText = "No hay número :)"
        showNumber.style.color = 'gray'
    }
})


