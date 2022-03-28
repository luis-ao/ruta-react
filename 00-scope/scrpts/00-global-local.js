// Scope: Es el alncance que va tener una variable dentro del código. El scope se encarga de decir a que bloques de cóigo va acceder una variable

var hello = 'hola mundo';
// var hello = 'Helo +' - es global y puede cambiar su valor pero es mala práctica

let world = 'Hello world';
// let world = 'Hello'; - igual es global pero no puede cambiar su valor

const helloWorld = 'Hello World'
// const helloWorld = 'Hello' - igual es global pero no puede cambiar su valor

/* const anotherFunction = () => {
    console.log(hello);
    console.log(world)
    console.log(helloWorld)
} */

/* **********************
     LOCAL SOCOPE 
_______________________*/

const helloWorld2 = () => {
    const hello2 = 'hello world';
    console.log (hello2);
}

helloWorld2();
// console.log (hello2); - no puede acceder por que no esta definido globalmente, sólo dentro de la función

// en este ejemplo modificamos el valor de la variable global pero esta modificación sólo vive dentro de la función

var scope = 'i am global' 
const functionScope = () => {
    var scope = 'i am local'
    const funct = () => {
        return scope
    }
    console.log(funct());
}

functionScope(); // return i am local
console.log(scope); // return i am global