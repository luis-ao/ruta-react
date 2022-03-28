// Clousere - es la combinación de una función y el ambito léxico en el que ha sido declarado la función (Rcuerda el ambieto en el que fue creado)

// no guarda valores este ejemplo
const moneyBox=(coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

// estructura correcta de clousere
const moneyBox2 = () => {
    var saveCoins2 = 0;
    const countCoins = (coins) => {
        saveCoins2 += coins;
        console.log(`MoneyBox: $${saveCoins2}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox2 ();

myMoneyBox (4);
myMoneyBox (6);
myMoneyBox (10);
