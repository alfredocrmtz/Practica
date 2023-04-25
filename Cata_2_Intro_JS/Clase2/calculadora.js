let operacion = prompt("Ingrese el numero correspondiente a la operación deseada.\n 1. Suma\n 2. Resta");
if (operacion === "1" || operacion === "2") {
    let strNumeroUno = parseInt(prompt("Ingrese primer numero"));
    let strNumeroDos = parseInt(prompt("Ingrese segundo numero"));
    switch (operacion) {
        case "1":
            let suma = Number(strNumeroUno) + Number(strNumeroDos);
            console.log("La suma es: ", suma);
            break;
        case "2":
            let resta = Number(strNumeroUno) - Number(strNumeroDos);
            console.log("La resta es: ", resta);
            break;
    }
}else{
    console.log("Operación no valida, intente nuevamente recargando la pagina.");
}
