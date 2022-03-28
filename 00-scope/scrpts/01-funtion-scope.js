// Para trabajar con variables globales de un bloque dentro de una funcion debemos utilizar var

const fruits = () => {
    if (true) {
        var fruit1 = 'aple';
        let fruit2 = 'kiwi';
        const fruit3 = 'orange';
    }
    console.log(fruit1);
    // console.log(fruit2); - marca error por que es let
    // console.log(fruit3); - marca error por que es const
}
fruits();

// en este ejemplo ya que no utilizamos let, var si cambia su valor fuera del bolque de código
var x = 1;
{
    var x = 2;
    console.log(x); // retorna 2
}
console.log(x); // retorna 2

anotherFuncition2 = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
}

anotherFuncition2();