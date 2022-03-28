// Variable privadas con Clousures: JS por su naturaleza no fomenta el uso de datos privados pero por miedio de los Clousures podemos crear valores que solo pueden se accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

const person = () => {
    var saveName = 'name';
    return {
        getName: () => {
            return saveName
        },
        setName : (name) => {
            saveName = name;
        } 
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Oscar');
console.log (newPerson.getName());