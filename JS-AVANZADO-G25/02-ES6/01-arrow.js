
/**JavaScript Vanilla */
function suma(a,b){
    return a+b;
}

console.log(`La Suma es ${suma(10,20)}`);

// Funciones anonimas: Aveces las guardamos en una constante para que no sea anonima
const sumaDos = function (a,b){
    return a+b;
}

console.log(`La Suma Dos es ${sumaDos(10,20)}`);

/** Arrow Function */
// Azucar Sintactico (Sugar Syntax)
// No es necesaria la palabra 'function', en su lugar usamos => despues de los parametros/argumentos

const sumaCuatro = (a,b) => {
    return a+b;
}

console.log(`La Suma Cuatro es ${sumaCuatro(50,20)}`);

// Se puede simplificar aún más el uso de Arrow Function si solo tiene o retorna un solo comando
const sumaCinco = (a,b) => a+b; //Hace un return implicito

console.log(`La Suma Cuatro es ${sumaCinco(70,20)}`);

//Uso de Funciones anonimas que además es Arrow Function
const miArreglo = ["Perros", "Gatos", "Patos", "Ratones"];
miArreglo.forEach((elemento, index)=> console.log(index,elemento));