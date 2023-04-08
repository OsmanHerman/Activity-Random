//Crea un programa que genere un número aleatorio entre 1 y 100, y luego permita al usuario adivinar el número hasta que lo acierte. El programa debe indicar si el número adivinado es mayor o menor que el número generado.

/*function adivinarNum (){
    let r = Math.floor(Math.random() * (100 - 1) + 1);
    let number = Math.floor(parseInt(prompt("El sistema genera un número random y vos tenes que adivinarlo. \nIngresá un número del 1 al 100:")));

    while (number != r){
        alert("La pifiaste pa!");
        if (number > r){
            alert("El número es más chico, intentá de nuevo.")
        } else alert("El número es más grande, intentá de nuevo.");
        number = Math.floor(parseInt(prompt("Ingresá un número del 1 al 100:")));
    }

    alert("Le envocaste perrito malvado!");
    alert("Ya está, se terminó. ¿Qué más esperabas?");
    alert("Pelotudo...");
}

adivinarNum();*/

//-----------------------------------------------------------------------------

//Crea un programa que pida al usuario un número y calcule su factorial.

function factorial(){
    let number = Math.floor(parseInt(prompt("El sistema calcula el factorial (n!) del número ingresado.\n¿Qué es el factorial de un número? Se define como el producto de todos los números naturales anteriores o iguales a él.\n\nIngresá un número entero positivo:")));
    let fact = number;

    if (number === 0){
        fact = 1;
        alert("Por definición el factorial de 0 es 1: 0!=1");
    } else {
        for (let i=number-1; i>0; i--){
            fact= fact*i;
        }
        alert("El factorial de "+number+" es: "+fact.toLocaleString());
    }
}

factorial();

