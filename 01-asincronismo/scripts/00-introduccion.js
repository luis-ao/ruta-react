// Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback. Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.

function sum(num1, num2){
    return num1 + num2;
};

function calc(num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(6, 2, sum));

function date(callback){
    console.log(new date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
};

function printDate (dateNow){
    console.log(dateNow)
};

date(printDate);