const currentHour = 15;
let message;

if (currentHour >= 22) {
    message = console.log("Não deveríamos comer nada, é hora de dormir.");
}  else if (currentHour >= 18 && currentHour < 22) {
    message = console.log("Rango da noite, vamos jantar :D");
} else if (currentHour >= 14 && currentHour < 18) {
    message = console.log("Vamos fazer um bolo pro café da tarde?");
} else if (currentHour >=11 && currentHour <= 11) {
    message = console.log("Hora do almoço!");
} else {
    message = console.log("Hmmmmmm, cheiro de café recém passado.");
}