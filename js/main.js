

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
let bonus = 0;
let result;

const Dado = [
    {
        id: 0,
        texto: ("Agarra el dado: D100"),
        numero: 100,
    },
    {
        id: 1,
        texto: ("Agarra el dado: D20"),
        numero: 20,
     },
     {
        id: 2,
        texto: ("Agarra el dado: D12"),
        numero: 12,
     },
     {
        id: 3,
        texto: ("Agarra el dado: D10"),
        numero: 10,
     },
     {
        id: 4,
        texto: ("Agarra el dado: D8"),
        numero: 8,
     },
     {
        id: 5,
        texto: ("Agarra el dado: D6"),
        numero: 6,
     },
     {
        id: 6,
        texto: ("Agarra el dado: D4"),
        numero: 4,
     },
];

let Dadaso;

function eleccionDado(punto) {
    
        punto = parseInt(prompt("Agarra el dado : \n0)D100\n1)D20\n2)D12\n3)D10\n4)D8\n5)D6\n6)D4 "));
    
        Dadaso = punto;

    const o = Dado.find(valor => {
        valor.id == punto;
    });

    console.log(Dado[punto]);
    console.log(punto);
};

function resultado() {
    bonus = parseInt(prompt("¿De cuanto es el bonus? "));
    
    result = (Math.floor(Math.random () * Dado[Dadaso].numero + 1));
};

function totalDado() {
    alert("Tu resultado es: " + result + "+" + bonus);
    let juan = (result + bonus);
    alert("La suma de ambos es: " + (juan))
};


let usuario = pedirNombre();
let miDado = eleccionDado(Dadaso);
let Bonus = resultado();
totalDado();