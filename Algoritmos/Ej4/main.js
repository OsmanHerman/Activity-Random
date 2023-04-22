//Crea una función que reciba una cadena de texto como parámetro y retorne un objeto 
//con las palabras como llaves y el número de veces que aparecen en la cadena como valores.

let cadena = "Hola soy pancrasio y estoy en una cadena de texto y soy como soy porque de pelota y estoy pancrasio";

function contadorDePalabras(text) {
    const palabras = text.toLowerCase().split(' ');
    return palabras.reduce((cont, palabra) => {
      cont[palabra] = (cont[palabra] || 0) + 1;
      return cont;
    }, {});
  }

  console.log(contadorDePalabras(cadena));


//------------------------------------------------------------------------

//Crea una función que reciba un número y devuelva la secuencia de Fibonacci correspondiente a ese número.

/*La secuencia de Fibonacci es una sucesión infinita de números naturales. 
Esta serie numérica empieza con 0 y 1, siguiendo con la suma de los dos 
números anteriores hasta el infinito: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233.*/

/*let number = parseInt(prompt("Ingresa un número para calcular la secuencia de Fibonacci:"))

function fibonacci(n) {
    let sec = [0, 1];
    for (let i = 2; i < n; i++) {
      sec[i] = sec[i - 1] + sec[i - 2];
    }
    return sec;
  }

  console.log(fibonacci(number));*/
  

















/*for (let i=0; i<cadenaArrays.length; i++){
    cadenaObj[i] = {cadenaArrays[i]: 1};

    if(!cadenaObj[n].includes(cadenaArrays[i])){
        cadenaObj[n] = {cadenaArrays[i]: 1};
    }
}*/
//const iterator = cadenaObj.values();
/*for (const e of iterator) {
    elemento = e;
    obj = {elemento: 1}
    
    
    
    console.log(obj)
}*/

/*console.log(iterator.next().value)
console.log(iterator.next().value)*/