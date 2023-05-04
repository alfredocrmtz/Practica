let pokemons = ['PIKACHU','GOKU','CHARMANDER','NARUTO','MEWTWO','BOLBAZOR','WANDA'];

/*for(let i = 0; i<pokemons.length ; i++){
    console.log(`${i}. ${pokemons[i]}`);
}*/

/*for(let i = 0; i<pokemons.length ; i++){
    if(pokemons[i].length>7){
        continue; //Salta el elemento que cumple la condición y continua con la ejecución de la siguiente iteración
    } 
    console.log(`${i}. ${pokemons[i]}`);   
}

for(let i = 0; i<pokemons.length ; i++){
    if(pokemons[i].length>7){
        break; //Rompe completamente el ciclo en ejecución.
    } 
    console.log(`${i}. ${pokemons[i]}`);   
}*/

//const tituloPagina = document.getElementById("tituloPagina");
const tituloPagina = document.querySelector("#tituloPagina");

//const parrafos = document.getElementsByTagName("p");
const parrafos = document.querySelectorAll("p");

//const elementosClaseBody= document.getElementsByClassName("body");
const elementosClaseBody = document.querySelectorAll(".body");

console.log(tituloPagina);
console.log(parrafos[0].innerText);
console.log(elementosClaseBody);

function saludo(nombre){
    console.log(`Hola ${nombre}`); 

    tituloPagina.style.color="red";
    parrafos[1].style.color="blue";
    tituloPagina.innerText='Hola '+nombre+ " esta aprendiendo JS";
    
    const copiaNodeListToArray = [...parrafos]; //spread operator
    for(let elemento of copiaNodeListToArray){
        elemento.style.color="peru";
    }    
}

const valorModifica= document.querySelector("#valor");

var valor = 0;

function incremento(){
    if(valor>=0 && valor<50){
        valor++;
    }
    valorModifica.innerText=valor;
}

function decremento(){
    if(valor>0 && valor<=50){
        valor--;
    }
    valorModifica.innerText=valor;
}


