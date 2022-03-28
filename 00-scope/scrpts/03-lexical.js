const buildCount = (i) =>{
    let count = i; 
    const displayCount = ()=>{
        console.log(count++); // puede acceder a count or que es el bloque hijo
    };
    return displayCount
}

const myCount = buildCount(1);
myCount ();
myCount ();
myCount ();

const myOtherCount = buildCount (10);
myOtherCount ();
myOtherCount ();

