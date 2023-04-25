// let edad= 18;

// edad>=18 ? console.log("Mayor de edad") : console.log("Menor de edad");
// console.log("Me gusta tomar",(edad>=18 ? "vino" : "agua"));

// const poblacion = 10;

// if(poblacion>=33){
//     console.log("1. La población de México está por encima del promedio");
// }else{
//     console.log("1. La población de México está por debajo del promedio");
// }

// const problacionMex= poblacion>=33 ?
// console.log("2. La población de México está por encima del promedio")
// :
// console.log("2. La población de México está por debajo del promedio");

// const problacionMex2 = `La población de México está por ${poblacion >=33 ? 'encima' : 'debajo'} del promedio`;

const AGE_OF_RETIREMENT = 65;
const THIS_YEAR = 2023;
const age = 30;
const birthYear = 1960;

function yearUmtilRetirementOrg(age){    
    return AGE_OF_RETIREMENT-age;
}

console.log(yearUmtilRetirementOrg(age));

function calculateAge(birthYear){
    const agec= THIS_YEAR - birthYear;
    return agec;

}

function yearUmtilRetirement(birthYear){    
    const age = calculateAge(birthYear);
    const yearsForRetirement = AGE_OF_RETIREMENT-age;
    if(yearsForRetirement<=0){
        return "Ya te retiraste";
    }else{
        return `Te faltan ${yearsForRetirement} años para retirarte`;
    }
}

console.log(yearUmtilRetirement(birthYear));

const nombre = "Alfredo";

function saludo(nombre){
    return "Hola "+nombre;
}

console.log(saludo(nombre));