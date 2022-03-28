// El motor que compila el código JS antes de ser interpretado eleva las declaraciones antes (var a) y después las asignaciones(a = 2) de esta manera podemos acceder a un valor que aún no ha sido declarado 

a = 2;
var a;
console.log(a);

nameDog('Roke'); // el motor nos ayuda a leer esta asignación aunque no se realice antes la función

function nameDog (name){
    console.log(name)
};