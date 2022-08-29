

function pedirNombre() {
    alert("¡Bienvenido a Dados Selk!")
    let nombre = prompt("¡Hola! ¿Quien va a tirar? ");
    while (nombre === "") {
        nombre = prompt("Identificate, queremos saber quien es el ludopata ");
    }
    return nombre;
}

let bonusDado;
let dadoElejido;
let Dado;
let bonus;

function mostrarDados(bonusDado, Dado) {
    
    do {
        Dado = parseInt(prompt("¿Que dado roleara? : \n1)D100\n2)D20\n3)D12\n4)D10\n5)D8\n6)D6\n7)D4 "))
    } while (Dado < 1 || Dado > 7)

    dadoElejido = Dado;
    switch (Dado) {
        case 1:
            return bonus = parseInt(prompt("¿De cuanto es el bonus? "));
        case 2:
            return bonus = prompt("¿De cuanto es el bonus? ");
        case 3:
            return bonus = prompt("¿De cuanto es el bonus? ");
        case 4:
            return bonus = prompt("¿De cuanto es el bonus? ");
        case 5:
            return bonus = prompt("¿De cuanto es el bonus? ");
        case 6:
            return bonus = prompt("¿De cuanto es el bonus? ");
        case 7:
            return bonus = prompt("¿De cuanto es el bonus? ");
    }
}



function resultado(Dado) {
    if (Dado == 1) {
        return Math.floor(Math.random () * 100+1);
    }
    else if (Dado == 2) {
        return Math.floor(Math.random () * 20+1);
    } else if (Dado == 3) {
        return Math.floor(Math.random () * 12+1);
    } else if (Dado == 4) {
        return Math.floor(Math.random () * 10+1);
    } else if (Dado == 5) {
        return Math.floor(Math.random () * 8+1);
    } else if (Dado == 6) {
        return Math.floor(Math.random () * 6+1);
    } else if (Dado == 7) {
        return Math.floor(Math.random () * 4+1);
    }
}


function totalDado() {
    alert("Tu resultado es: " + result + "+" + bonus);
    let juan = (result + bonus);
    alert("La suma de ambos es: " + (juan))
}


let usuario = pedirNombre();
let miDado = mostrarDados(bonusDado, Dado);
let result = resultado(dadoElejido);
totalDado();

console.log(usuario + ", tu dado es: " + result + " " + miDado);