/*const yaxche ={
    firstName: 'Yaxche',
    lastName: 'Manrique',
    birthYear: 1993,
    job: 'sensei',
    friends: ['Rachel','Monica','Chandler'],

    calculateAge: function (birthYear){
        return 2023- birthYear;
    }
}

console.log(yaxche.calculateAge(1993));

const yaxchel ={
    firstName: 'Yaxche',
    lastName: 'Manrique',
    birthYear: 1993,
    job: 'sensei',
    friends: ['Rachel','Monica','Chandler'],

    calculateAge: function (){
        return 2023- yaxchel.birthYear;
    }
}

console.log(yaxchel.calculateAge());

const yaxchell ={
    firstName: 'Yaxche',
    lastName: 'Manrique',
    birthYear: 1993,
    job: 'sensei',
    friends: ['Rachel','Monica','Chandler'],

    calculateAge: function (){
        yaxchell.age = 2023 - yaxchell.birthYear
    }
}

console.log(yaxchell);
yaxchell.calculateAge();
console.log(yaxchell);*/

/*let dato;
while(dato != 'esc'){
    dato= prompt('Ingresa un dato');
    console.log(dato);    
}*/

let contador=1;

while(contador<=10){
    console.log(`1. ${contador} X 12 = ${contador*12}`);
    contador++;
}

let i=1;
while(i <= 120){
    i%12===0 ? console.log(`2. ${i/12} X 12 = ${i}`) : 0;    
    i++;
}