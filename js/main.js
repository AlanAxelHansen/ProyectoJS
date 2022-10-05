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

const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 8;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}

function fetchPokemons(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);

// const pj_container = document.querySelector(".pj_container");

// function fetchPersonaje(id) {
//    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//    .then(res => res.json())
//    .then (data => {
//       createPersonaje(data);
//    });

// };

// function fetchPersonajes(number) {
//    for (let i= 1; i<=number; i++) {
//       fetchpersonaje(i);
//    }
// };

// function createPersonaje(Personaje) {
//    const card = document.createElement('div');
//    card.classList.add('personaje-block');

//    const spriteContainer = document.createElement('div');
//    spriteContainer.classList.add('img-container');
   
//    const sprite = document.createElement('img');
//    sprite.src = personaje.sprite.front_default;

//    spriteContainer.appendChild(sprite);

//    const number = document.createElement('p');
//    number.textContent = `#${personaje.id.toString().padStart(3, 0)}`;
   
//    const name = document.createElement('p');
//    name.classList.add('name');
//    name.textContent = personaje.name

//    card.appendChild(sprite);
//    card.appendChild(number);
//    card.appendChild(name);

//    pj_container.appendChild(card);
// };

// fetchPersonajes(9);

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