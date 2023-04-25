let day = "Lunes";

switch (day) {
    case "Lunes":
        console.log("Domir, descarsar del descanso");
        break;
    case "Martes":
        console.log("Iniciar la semana");
        break;
    case "Miercoles":
        console.log("Atender lo posible");
        break;
    case "Jueves":
        console.log("Preparar el fin de semana");
        break;
    case "Viernes":
        console.log("Fin de semana iniciando");
        break;
    case "Sabado":
        console.log("Domir en la medida de lo posible");
        break;
    case "Domingo":
        console.log("Seguir durmiendo....");
        break;
    default:
        console.log("Opción no valida");
        break;
}

switch (day) {
    case "Lunes":
    case "Miercoles":
        console.log(day,"Hay clase");
        break;
    case "Martes":
    case "Jueves":
    case "Viernes":
    case "Sabado":       
    case "Domingo":
        console.log(day,"No hay clase");
        break;
    default:
        console.log("Opción no valida");
        break;
}