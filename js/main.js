//Cambiar a Modo oscuro/claro
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});


if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}


let bonusDado,
dadoElejido,
bonus = 0,
resultTotal,
Dadaso,
caras = 0,
h4,
mario;

// const Dado = [
//    {
//       id: 0,
//       texto: ("Agarra el dado: D100"),
//       numero: 100,
//    },
//    {
//       id: 1,
//       texto: ("Agarra el dado: D20"),
//       numero: 20,
//    },
//    {
//       id: 2,
//       texto: ("Agarra el dado: D12"),
//         numero: 12,
//       },
//       {
//          id: 3,
//          texto: ("Agarra el dado: D10"),
//          numero: 10,
//       },
//       {
//          id: 4,
//          texto: ("Agarra el dado: D8"),
//          numero: 8,
//       },
//       {
//          id: 5,
//          texto: ("Agarra el dado: D6"),
//          numero: 6,
//       },
//       {
//          id: 6,
//          texto: ("Agarra el dado: D4"),
//          numero: 4,
//       },
//    ];
   
   
   function seleccionarDado(){
      seleccionado = document.getElementById("dadito").value;
      bonus = document.getElementById("bonus").value;
      result1 = (Math.floor(Math.random () * seleccionado + 1));
      result2 = (Math.floor (bonus));
      resultTotal = result1 + result2;
   console.log(seleccionado, bonus);
   console.log(result1, result2);
   console.log(resultTotal);
};



function dadinhoCustom(){
   custom = document.getElementById("dadoCustom").value;
   customBonus = document.getElementById("bonusCustom").value;
   result1 = (Math.floor(Math.random () * custom + 1));
   tatan = (Math.floor (customBonus));
   mario = (custom + customBonus);
   resultTotal = result1 + tatan;
   console.log(tatan);
   console.log("el resultado es" + " " + result1);
   console.log("TOTAL TOTAL TOTAL" + " " + resultTotal);
};

function mostrarResultado(){
   document.getElementById("resultado__texto").innerText = resultTotal;
   Swal.fire({
      title: '¡SOS MUY BUENO!',
      text: 'Tu nivel en el Buenometro es de ' + resultTotal + ". Deberas mejorarlo para ser Dios",
      imageUrl: "../assets/Hoakkimn cara.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
};

totalFlat = seleccionarDado(resultTotal);
totalCustom = dadinhoCustom(resultTotal);
// function pedirNombre() {
//     alert("¡Bienvenido a Dados Selk!")
//     let nombre = prompt("¡Hola! ¿Quien va a tirar? ");
//     while (nombre === "") {
//         nombre = prompt("Identificate, queremos saber quien es el ludopata ");
//     }
//     return nombre;
// }
// document.getElementById("confirmar1").onclick = function(){
   
   //    var custom = document.getElementById("dadoCustom").value;
   //    console.log("tu numero es", custom);
   // };
   
   // function seleccionarDado() {
      //    punto = document.getElementsById('opcionesDado');
      //    Dadaso = punto.value;
      //    console.log(Dadaso, punto);
      
      // };
      
      
      // function eleccionDado(punto) {
         
         //         punto = parseInt(prompt("Agarra el dado : \n0)D100\n1)D20\n2)D12\n3)D10\n4)D8\n5)D6\n6)D4 "));
         
         //         Dadaso = punto;
         
         //     const o = Dado.find(valor => {
            //         valor.id == punto;
//     });

//     console.log(Dado[punto]);
//     console.log(punto);
// };

// function resultado() {
   //     bonus = parseInt(prompt("¿De cuanto es el bonus? "));
   
   //     result = (Math.floor(Math.random () * Dado[Dadaso].numero + 1));
   // };
   
   // function totalDado() {
      //     alert("Tu resultado es: " + result + "+" + bonus);
//     let juan = (result + bonus);
//     alert("La suma de ambos es: " + (juan))
// };


// // let usuario = pedirNombre();
// // let miDado = eleccionDado(Dadaso);
// let Bonus = resultado();
// totalDado();