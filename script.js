function multiplicacao (){
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")

    const numeroPeso = Number(peso)
    const numeroAltura = Number(altura)

    const IMC = numeroPeso / (numeroAltura * numeroAltura)

    console.log(IMC)

    document.getElementById("resultado").innerHTML = `Resultado: ${IMC}`

}