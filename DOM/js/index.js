/*Exercici 1
Exercici 1: Accedint al document
Mostra per consola els següent element DOM:
• document
• body
• id del formulari
• el links
• el className d’algun dels links
• totes les imatges*/



/*Exercici 2: Accedim a les classes
Mostra per consola
• el header ( class = header )
• el contenido-hero ( class = contenido-hero )
• els contenidors ( class = contenedor)*/ 
/* 
let header = document.getElementsByClassName("header");
console.log(header);

let contenido_hero = document.getElementsByClassName("contenido-hero");
console.log(contenido_hero);

let contenidors = document.getElementsByClassName("contenedor");
console.log(contenido);
******************
/*Exercici 3: Accedim a element per id
• Mostra l’element formulario ( id = formulario)

• Mostra l’element footer ( id = footer )*/

/* let formulario = document.getElementById('formulario');

console.log(formulario);

let footer = document.getElementById('footer');

console.log(footer); */


/* Exercici 4: QuerySelector
Mostra per consola:
• La primera .card
• L’element de la classe info del contenidor premium
• La segona card de hospedaje
• El formulari per id
• El primer menú de navegació <nav> */

/* let card = document.querySelector(".card");
console.log(card); */

/* let h1 = document.getElementById("formulario").textContent="Nou text"
*/

/* let el3 = document.querySelectorAll(".card .contenedor-cards")[2];
console.log(el3); */

/* Exercici 8: Crear un nou link en el menú de Navegació principal
Amb appendChild crearem una nova opció de navegació en el menú 
principal */

let novaPestanya = document.createElement("a"); 
novaPestanya.href="#";
novaPestanya.textContent="Nova Pestanya";

let nou_nav = document.getElementById(navegacion);
nou_nav=appenChild(novaPestanya);




