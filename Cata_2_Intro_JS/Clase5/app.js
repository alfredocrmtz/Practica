const secretNumber = document.querySelector(".secret-number");
const randomNumber = Math.trunc(Math.random()*20)+1;

secretNumber.textContent=randomNumber;

const button = document.querySelector(".check");

const mensaje = document.querySelector("#mensaje");

button.addEventListener('click',function(){
    const respuesta = Number(document.querySelector("#floatingInputInvalid").value);
    if(respuesta===randomNumber){
        mensaje.textContent="Correcto ";
    }else if(respuesta > randomNumber){
        mensaje.textContent="Intenta con un número más pequeño..";
    }else if(respuesta < randomNumber){
        mensaje.textContent="Intenta con un número más grande...";
    } else{
        console.log("No es correcto intenta nuevamente...");
    }
    document.querySelector("#floatingInputInvalid").value="";
});